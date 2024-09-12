"use client"
import { useState } from "react";
import SwapChartComponent from "./Swap/SwapChart";
import SwapValueComp from "./Swap/SwapValue";
import WalletInfo from "./Wallet/WalletInfo";
import WalletProvider from "./Wallet/WalletProvider";
 interface ActiveComponent{
    name:String
 }
const WalletLayout:React.FC<ActiveComponent>=({name})=>{
    console.log(name);
    const activeComponent=name;
    return(
    <div className="flex flex-col border-spacing-y-4 w-[75%] pl-6 bg-[#0d0d1f] border-2 border-[#fefefe0d]">
        <h2 className="m-6 mr-0 text-3xl text-white">{name.toUpperCase()} Layout #1</h2>
        { activeComponent=="swap" && <div className="flex flex-row space-x-5">
            <SwapValueComp/>
            <SwapChartComponent/>
        </div>}
       {
        activeComponent=="wallets" &&<div className="flex flex-row space-x-5">
        <WalletInfo/>
        <div className="flex flex-col w-[55%]">
            <WalletProvider/>
        </div>
    </div>
       }
    </div>

    )
}
export default WalletLayout;