"use client"
import { act, useState } from "react";
import SwapChartComponent from "./Swap/SwapChart";
import SwapValueComp from "./Swap/SwapValue";
import WalletInfo from "./Wallet/WalletInfo";
import WalletProvider from "./Wallet/WalletProvider";
import WatchListComponent from "./WatchList/WatchListComponent";
import WalletValue from "./Wallet/WalletValue";
import HistoryComponent from "./History/HistoryComponent";
import { ChartComponent } from "./Charts/Chart";
import MarketComponent from "./MarketLayout/MarketComponent";
 interface ActiveComponent{
    name:String
 }
const WalletLayout:React.FC<ActiveComponent>=({name})=>{
    console.log(name);
    const activeComponent=name;
    return(
    <div className="flex flex-col  w-[75%] px-6 pb-6  bg-[#0d0d1f] border-2 border-[#fefefe0d]  ">
        <h2 className="m-6 mr-0 text-5xl text-white text-center">{name.toUpperCase()}</h2>
        { activeComponent=="swap" && <div className="flex flex-row space-x-5">
            <SwapValueComp/>
            <SwapChartComponent/>
        </div>}
       {
        activeComponent=="wallets" &&<div className="flex flex-row space-x-5">
        <WalletInfo/>
        <div className="flex flex-col w-[55%] space-y-5">
            <WalletProvider/>
            <WalletValue/>
        </div>
    </div>
       }
       {
        activeComponent=="watchList" && <div className="bg-[#151429] p-5 border-2 border-[#fefefe0d] rounded-xl overflow-y-scroll">
            <WatchListComponent/>
        </div> 

       }
        {
        activeComponent=="history" && <div className="bg-[#151429] rounded-xl overflow-y-scroll ">
            <HistoryComponent/>
        </div> 
       }
       {
        activeComponent=="markets" && <div className="bg-[#151429] rounded-xl ">
            <MarketComponent/>
           
            </div>
       }
    </div>

    )
}
export default WalletLayout;