import React, { useEffect, useState } from 'react'
import Creator from './Creator'
import { convertHexToNumber, truncate } from '../utils/truncate'
import { useContractRead } from 'wagmi'
import { CONTRACT_ABI, DONATION_MAINNET_CONTRACT_ADDRESS } from '@/utils/constants'

export default function FeaturedCreators() {  
  const [creators, setCreators] = useState<any[]>([])

  const {data} = useContractRead({
      address: DONATION_MAINNET_CONTRACT_ADDRESS,
      abi: CONTRACT_ABI.abi,
      functionName: 'getCreatorList',
  })

  useEffect(() => {
    setCreators(data as any[])
  }, [data])

  return (
    <div>
      {creators === undefined || creators.length === 0 ? <div></div> : 
        <div>
          <h3 className='text-center text-3xl'> 👌 Featured Creators 👌 </h3>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center md:p-8 xs:p-2 '>
            {creators && creators.map((creator, index) => <div className='mx-2' key={index}>
              <Creator
                id={convertHexToNumber(creator.id) - 1}
                name={creator.username}
                bio={creator.userbio}
                earnings={creator.donationsReceived.toString()/1e18 }
                currency="CUSD" supporters={convertHexToNumber(creator.supporters)}
                image={`https://gateway.pinata.cloud/ipfs/${creator.ipfsHash}`}
                creatorAddress={creator.walletAddress}  
                phoneContact={creator.phoneContact}            
              />
             {/* <SupporterModal myId={creator.id} username={creator.username} walletAddress ={creator.creatorAddress} /> */}
            </div>
            )}       
          </div>
          <p className='text-center text-2xl pb-4'>See more...</p>
        </div>
      }
    </div>
  )
}
