"use client"
import { walletData } from "./WalletData";
import HoldingComponent from "./HoldingCompoenent"
import { FaSearch } from "react-icons/fa";
export default function WalletInfo() {
  return (
    <div className="w-[50%] bg-[#151429] h-[100%] border-2 border-[#fefefe0d] p-5 rounded-xl overflow-y-scroll">
      <div className="flex flex-row bg-[#0d0d1f] rounded-xl h-12 items-center pl-3">
      <FaSearch  className=" text-white"/>
      <input 
        placeholder="Search" 
        className="w-[100%] rounded-xl px-3  bg-[#0d0d1f] h-12 text-white" 
      />
      </div>
     
      <ul className="flex flex-col mt-4 overflow-y-scroll">
        {walletData.result.map((currency, index) => (
          <li key={index} className="mb-2">
            <HoldingComponent name={currency.name.toLowerCase()} balance={currency.balance_formatted.slice(0,8)} symbol={currency.symbol} /> 
          </li>
        ))}
      </ul>
    </div>
  );
}
