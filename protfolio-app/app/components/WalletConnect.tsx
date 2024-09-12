"use client"
// import ConnectButton from "./components/WalletConnect";

import { useWeb3Modal } from "@web3modal/ethers/react";
import { useWalletInfo } from "@web3modal/ethers/react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
export default function WalletConnectionButton(){
  
    const {open}=useWeb3Modal();
    const {walletInfo}=useWalletInfo();
    const { address, chainId, isConnected } = useWeb3ModalAccount();

    const handleClick=()=>{
        open();
        console.log(address);
        console.log(chainId);
        console.log(isConnected);
        console.log(walletInfo?.name,walletInfo?.icon);
    }
   
    return (
        <>
        <button onClick={handleClick} className="rounded-sm px-3 bg-[#0d0d1f] border-[#fefefe0d] h-10 text-white sideColumn-Btn w-[20%] text-xl">Connect</button>
        </>
    )
}