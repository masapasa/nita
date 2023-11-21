import React, {useState, useEffect} from 'react'
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { ethers , parseEther} from "ethers";
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { usePrepareContractWrite,useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi';
import { CONTRACT_ABI, DONATION_MAINNET_CONTRACT_ADDRESS } from  '@/utils/constants';
import axios from 'axios';
import toast from 'react-hot-toast';
import { sendCUSDTip, transferCUSD } from '@/utils/interact';

interface IParams {
  myId: number;
  username: string;
  walletAddress: string;
  phoneContact: string;
  show: boolean;
  onHide: () => void;
}
export default function SupporterModal(params: IParams) {

  const { address } = useAccount();
  const [amount, setAmount] = useState<string>("0")
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  // const { route } = useRouter()
  const [resolveDomain, setResolveDomain] = useState<string | null>("")
  const [account, setAccount] = useState<string>()  
  const amountHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value)
  }

  const commentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }

  const walletHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setWalletAddress(e.currentTarget.value)
  }

    const { config } = usePrepareContractWrite({
    address: DONATION_MAINNET_CONTRACT_ADDRESS,
    abi: CONTRACT_ABI.abi,
    functionName: 'sendTip',
    value: amount as never && parseEther(amount),
    args: [comment, params.myId],
  })

  // handle vote state
  const { data, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash,     
  })
console.log(params.myId)

const sendSms = async () => {

  const payload = {
    to: `+234${params.phoneContact}`,
    message: `Your Dtipify profile is getting noticed. You just received a tip of ${amount} CELO`, 
  }

  try {
    const response = await fetch('/api/twilio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      console.log('SMS sent successfully');
    } else {
      console.error('Failed to send SMS');
    }
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};
  const sendSupport = async () => {
    if (!amount) {
      return alert("Amount required")
    }else{
      if(window.ethereum && window.ethereum.isMiniPay){
        await sendCUSDTip(account as string, comment, params.myId, parseEther(amount) )

      }
      write?.()
      if(isSuccess){
        await sendSms() 
        toast.success(`Transaction Successful ${data?.hash}`)
        params.onHide()
        setAmount("")
        setComment("")
      }
    }

    }

    useEffect(() => {
      if(address){
        setAccount(address)
      }
    })
  

  return (
    params.show ? 
    <div>
       <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-90 w-full h-full outline-none">
            <div className="relative lg:w-1/3 md:w-full sm:w-full my-6 mx-auto">
              <div className="shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t-md">
                  <h3 className="text-xl font-medium leading-normal text-gray-800">{`Support ${params.username} with`}</h3>
                  <button
                    className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    onClick={params.onHide}
                  >
                    <span className="text-black border-2 p-2 rounded-l-full ">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                    <div className="flex justify-center flex flex-col">
                      <FormInput placeholder="Amount" value={amount} onChange={amountHandler} type="number" />
                      <p className="black">{` id here : ${params.myId}`}</p> 
                      <textarea
                        className="
                          form-control
                          text-black
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Say something nice!"
                        value={comment}
                        onChange={commentHandler}
                      >                  
                      </textarea>
                      <FormInput placeholder="Wallet address" value={ !resolveDomain ? params.walletAddress :  resolveDomain} onChange={walletHandler} type="text" disabled={true} />                         
                    </div>
                    <CustomButton text={isLoading ? "Loading... " : "Support"} myStyle="bg-amber-500 w-full p-4" action={() =>{sendSupport()}}/>
              </div>
              </div>
            </div>
          </div> 
    </div>: null
    
  )}
