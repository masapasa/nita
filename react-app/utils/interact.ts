import {BrowserProvider, Contract, Wallet, WebSocketProvider, parseEther, parseUnits } from "ethers"
import { DONATION_MAINNET_CONTRACT_ADDRESS, CONTRACT_ABI, CUSD_ABI} from "./constants"
import { CeloContract, newKitFromWeb3 } from "@celo/contractkit";
import Web3 from "web3";
// const kit = newKit("https://forno.celo.org");

const CUSD_ADDRESS = "0x765de816845861e75a25fca122bb6898b8b1282a"

export const createCreatorAccount = async (
    username: string,
    ipfsHash: string,
    userbio: string,
    phoneContact: string,
    networkOption: string,
    userAddress: string
  ) => {
    try {
      if (window.ethereum) {
        // Check if the user is connected
        if (!window.ethereum.isConnected()) {
          console.error('User is not connected to the Ethereum provider.');
          return;
        }

        const web3 = new Web3(window.ethereum)
        const kit = newKitFromWeb3(web3)

        // Get connected account

        // const provider = new BrowserProvider(window.ethereum);
        // const signer = await provider.getSigner(userAddress);

        // Replace CUSD_ADDRESS and CUSD_ABI with your actual contract details
        // const donationContract = new Contract(DONATION_MAINNET_CONTRACT_ADDRESS, CONTRACT_ABI.abi, signer);
        // Check if the function exists before calling it

        const contractInstance =  new kit.connection.web3.eth.Contract(CONTRACT_ABI.abi, DONATION_MAINNET_CONTRACT_ADDRESS)
        kit.setFeeCurrency(CeloContract.StableToken)

        if (contractInstance.methods.setCreatorDetail) {
          let txObject = await contractInstance.methods.setCreatorDetail(
            username,
            ipfsHash,
            userbio,
            phoneContact,
            networkOption
          );
         const tx = await kit.sendTransactionObject(txObject, { from: userAddress, feeCurrency: CUSD_ADDRESS })
        //   const tx = await kit.sendTransaction({data: txObject, from:userAddress,  feeCurrency: CUSD_ADDRESS})
          let receipt = await tx.waitReceipt();
          console.log(receipt.transactionHash);
        } else {
          console.error('setCreatorDetail function not found on the contract.');
        }
      } else {
        console.error('Ethereum provider not found.');
      }
    } catch (err) {
      console.error(err);
    }
  };



const approveCUSDTransfer = async (amount: bigint, userAddress: string) => {
    try{
        if(window.ethereum){
            
            const web3 = new Web3(window.ethereum)
            const kit = newKitFromWeb3(web3)
            kit.setFeeCurrency(CeloContract.StableToken)

            // Get connected account if not connected request connection
            // const provider = new BrowserProvider(window.ethereum)
            // const signer = await provider.getSigner(userAddress)
    
            // const cUSDContract = new Contract(CUSD_ADDRESS, CUSD_ABI, signer )
            // let txns =  await cUSDContract.approve(DONATION_MAINNET_CONTRACT_ADDRESS, amount )
            //   let receipt = await txns.wait() 
            //   console.log(receipt)
            //   console.log("approved ")

            let cUSDcontract = await kit.contracts.getStableToken();
            const contractInstance =  new kit.connection.web3.eth.Contract(CUSD_ABI, CUSD_ADDRESS)
                 const txObject = await contractInstance.methods.approve(DONATION_MAINNET_CONTRACT_ADDRESS, amount )
                    let tx = await kit.sendTransactionObject(
                        txObject, { from: userAddress, feeCurrency: cUSDcontract.address }
                        );
                      let receipt = await tx.waitReceipt();
                      console.log(receipt.transactionHash);
                    console.log("approved ")
        } 
    }catch(err){
        console.log(err)
    }
}

const allowance = async (userAddress: string, spender: string) => {
    try{
        if(window.ethereum){
            // Get connected account if not connected request connection
            const provider = new BrowserProvider(window.ethereum)
            const signer = await provider.getSigner(userAddress)
    
            const cUSDContract = new Contract(CUSD_ADDRESS, CUSD_ABI, signer )
            let txns =  await cUSDContract.allowance(userAddress, spender )
              let receipt = await txns.wait()           
             console.log("allowance is  ", receipt)

        } 
    }catch(err){
        console.log(err)
    }
}

export const sendCUSDTip = async (userAddress: string, message: string, index: number, 
    amount: bigint) =>{
        try{
            await approveCUSDTransfer(amount, userAddress)
            await allowance(userAddress, DONATION_MAINNET_CONTRACT_ADDRESS)
            if(window.ethereum){
                // Get connected account if not connected request connection

                // const provider = new BrowserProvider(window.ethereum)
                // const signer = await provider.getSigner(userAddress)
        
                // const donationContract = new Contract(DONATION_MAINNET_CONTRACT_ADDRESS, CONTRACT_ABI.abi, signer )
                // let txns =  await donationContract.sendTipERC20(message, index, 
                //     parseUnits(amount.toString(), 0), CUSD_ADDRESS)
                //     let receipt = await txns.wait() 
                //     console.log(receipt.blockHash)
                
                const web3 = new Web3(window.ethereum)
                const kit = newKitFromWeb3(web3)
                kit.setFeeCurrency(CeloContract.StableToken)

                 const contractInstance =  new kit.connection.web3.eth.Contract(CONTRACT_ABI.abi, DONATION_MAINNET_CONTRACT_ADDRESS)
                 const txObject = await contractInstance.methods.sendTipERC20(message, index, 
                    parseUnits(amount.toString(), 0), CUSD_ADDRESS)
                    let tx = await kit.sendTransactionObject(
                        txObject, { from: userAddress, feeCurrency: CUSD_ADDRESS }
                        );
                      let receipt = await tx.waitReceipt();
                      console.log(receipt.blockHash);
            }
        }catch(err){
            console.log(err)
        }
    }

    export const transferCUSD = async (userAddress: string, receipient: string,
        amount: bigint) =>{
            try{
                if(window.ethereum){
                    // Get connected account if not connected request connection
                    const provider = new BrowserProvider(window.ethereum)
                    const signer = await provider.getSigner(userAddress)
                  
                    const cUSDContract = new Contract(CUSD_ADDRESS, CUSD_ABI, signer )
                    let bal =  await cUSDContract.balanceOf( 
                        receipient)
                        console.log(bal)
                    let txns =  await cUSDContract.transfer( 
                        receipient,
                       parseUnits(amount.toString(), 0))
                        let receipt = await txns.wait()
                        console.log(receipt)
                }
            }catch(err){
                console.log(err)
            }
        }

