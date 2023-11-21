import React, { useState, useRef, useEffect } from 'react'
import CustomButton from './CustomButton'
import CircleCheck from '../images/circle-check.svg'
import SupporterModal from './Modal/SupporterModal'
import { useAccount } from 'wagmi'
import { truncate } from '../utils/truncate'
import Image from 'next/image'
interface ICreator {
  id: number;
  image: string,
  name: string,
  bio: string,
  earnings: number,
  supporters: number
  currency: string  
  creatorAddress: string
 phoneContact: string

}

export default function Creator(params: ICreator): JSX.Element{
  const { address } = useAccount()
  const [index, setIndex] = useState<number>(0)
  const [show, setShow] = useState<boolean>(false)
  const [isMiniPay, setMinipay] = useState(false)
  let creatorIndex = useRef<number>();

  const [account, setAccount] = useState(false)

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

  const handleClose = () => {  
    setShow(false)
  }


  return (
   <div className="flex justify-center m-4 w-full">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        
      <Image className=" w-full lg:h-auto md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={params.image} width={200} height={200} alt="profile pix" />
      <div className="p-6 flex flex-col justify-start">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{params.name}</h5>
        <p className="text-gray-700 text-base mb-4">
          {params.bio}
        </p>
          <div className='flex'>
            <Image src={CircleCheck} alt="icon" width={24} />
            <div>
              <p className="text-gray-600 text-xs">Donation received</p>
              <p className="text-gray-600 ml-2 text-lg">{params.earnings}<span> {params.currency}</span></p>
            </div>  
          </div>

           <div className='flex'>
            <Image src={CircleCheck} alt="icon" width={24} />
            <div>
              <p className="text-gray-600 text-xs ml-2">Supporter(s)</p>
              <p className="text-gray-600 ml-2 text-lg">{params.supporters}</p>
            </div>  
          </div>        
          <CustomButton
            myStyle='bg-amber-500 mt-4 w-full'
            text={`${truncate(params.creatorAddress)} Support`}
            action={() => setShow(true)} />
          {address || isMiniPay
            && <SupporterModal myId={params.id} username={params.name} walletAddress={params.creatorAddress} phoneContact={params.phoneContact} show={show} onHide={() => handleClose()} />
          }
      </div>
  </div>
</div>
  )
}