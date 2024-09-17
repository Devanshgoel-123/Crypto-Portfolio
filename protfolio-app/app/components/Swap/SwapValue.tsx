"use client"
import { useState , useEffect} from "react"
import InputBox from "./InputComponent"
import { Dispatch } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/redux/hooks";
import { setCoins } from "@/redux/features/swapCoins";
export default function SwapValueComp(){
    const dispatch=useAppDispatch();
    const [coin1,setCoin1]=useState<String>("Bitcoin");
    const [coin2,setCoin2]=useState<String>("Ethereum");
    const handleCoin1Change = (value: string) => {
        setCoin1(value);
      };
    
      const handleCoin2Change = (value: string) => {
        setCoin2(value);
        
      };
      useEffect(() => {
        dispatch(setCoins({coin1,coin2}));
        console.log(coin2);
        console.log(coin1);
      }, [coin2,coin1]);
    return (
        <div className="w-[40%] p-5 flex flex-col h-[550px] border-[#fefefe0d] border-2 space-y-4 rounded-xl bg-[#151429]">
                <InputBox select={handleCoin1Change} />
                <InputBox select={handleCoin2Change}/>
                <div className="bg-[#0d0d1f] w-[100%] h-fit p-5 space-y-3 border-[#fefefe0d] border-2 rounded-lg">
                <div className="flex flex-row justify-between">
                        <h5 className="text-[#00bc84]">Gas fee estimate</h5>
                        <h5 className="text-gray-300">0.00346ETH</h5>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-[#00bc84]">Total Liquidity</h5>
                        <h5 className="text-gray-300">1536.4 USDC</h5>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-[#00bc84]">APR</h5>
                        <h5 className="text-gray-300">18%</h5>
                    </div>
                </div>
                <button  className="rounded-xl px-3 bg-[#0d0d1f] border-[#fefefe0d] h-14 text-white sideColumnBtn  text-xl">
                    CONFIRM
                </button>
        </div>
    )
}