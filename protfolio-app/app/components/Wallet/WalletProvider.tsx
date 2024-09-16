import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useWalletInfo } from "@web3modal/ethers/react";
export default function WalletProvider(){
    const { address, chainId, isConnected } = useWeb3ModalAccount();
    const {walletInfo}=useWalletInfo();
    return <>
    <div className="min-h-[40%] bg-[#151429] border-2 border-[#fefefe0d] p-5 rounded-xl ">
        <div className="bg-[#0d0d1f] w-[100%] h-16  border-[#fefefe0d] border-2 rounded-lg flex flex-row justify-between p-3 text-center">
        <h2 className="text text-white text-2xl">Wallet Address : {address?.slice(0,20)}...</h2>
        </div>
        <div className="flex flex-row justify-between">
        <div className="bg-[#0d0d1f] h-16  border-[#fefefe0d] border-2 rounded-lg flex flex-row justify-between p-3 text-center mt-3 w-fit">
        <h2 className="text text-white text-2xl ">ChainID : {chainId}</h2>
        </div>
        <div className="bg-[#0d0d1f] h-16  border-[#fefefe0d] border-2 rounded-lg flex flex-row justify-between p-3 text-center mt-3 w-fit">
        <h2 className="text text-white text-2xl ">Wallet Provider : {walletInfo?.name}</h2>
        </div>
        </div>
       
    </div>
    </>
}