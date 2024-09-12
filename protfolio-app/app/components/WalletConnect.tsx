"use client"
// import ConnectButton from "./components/WalletConnect";

import { useWeb3Modal } from "@web3modal/ethers/react";


export default function WalletConnectionButton(){
    const {open}=useWeb3Modal();
    return (
        <>
        <button onClick={()=>open()}>Click ME!!</button>
        </>
    )
}