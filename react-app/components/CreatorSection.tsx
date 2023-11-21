import React, { useState, useEffect } from 'react'
import UserGuide from './UserGuide'
import CircleWallet from '../images/circle-wallet.svg'
import CircleCreate from '../images/circle-create.svg'
import CirclePay from '../images/circle-pay.svg'
import CircleShare from '../images/circle-share.svg'
import CustomButton from './CustomButton'
import { useAccount, useConnect } from 'wagmi'
import CreatorModal from './Modal/CreatorModal'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { error } from 'console'

export default function CreatorSection(): JSX.Element {
  const { address } = useAccount()
  const [showModal, setModal] = useState(false);
  const [account, setAccount] = useState(false)
  const [isMiniPay, setMinipay] = useState(false)

  const { status, isSuccess, data } = useConnect({
    connector: new InjectedConnector()
  })

  useEffect(() =>{
    if(window.ethereum && window.ethereum.isMiniPay){
      setMinipay(true)
    }
    if(address){
      setAccount(true)
    }else{
      setAccount(false)
    }
  }, [address])

  return (

    <div className='md:my-36 xs:my-16'>
      <h3 className='text-center text-3xl'>{`🔅  Are you a Creator? 🔅`} </h3>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
        <UserGuide
        image={CircleWallet}
        title="Connect Wallet"
        description='We have variety of wallet connection options.
                    Connect to your wallet of choice'
      />
       <UserGuide
        image={CircleCreate}
        title="Creator Account  setup "
        description='Easily setup your creator account and start 
                      receiving support from your fans'
      />
       <UserGuide
        image={CirclePay}
        title="Receive Payment"
        description='Instantly receive payment to your provided
                      wallet address'
      />
       <UserGuide
        image={CircleShare}
        title="Share your Profile"
        description='Share your profile to gain more supporters'
      />
      </div>
      <div className='flex justify-center m-8'>

        <CustomButton
          myStyle='bg-amber-500 p-4'
          text='Creator Account Setup'
          action={() => setModal(true)}
         />
        {address || isMiniPay
            &&  <CreatorModal show={showModal} onHide={() => setModal(false)} />   
        }

      </div>
    </div>
  )
}
