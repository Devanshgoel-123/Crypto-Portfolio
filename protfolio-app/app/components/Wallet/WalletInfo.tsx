"use client"

import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import HoldingComponent from "./HoldingCompoenent"

export default function WalletInfo() {
  
  const currencyArray = ["Bitcoin", "Ethereum", "Tether", "Polygon", "Matic", "Avalanche"];
  
  return (
    <div className="w-[40%] bg-[#151429] max-h-screen border-2 border-[#fefefe0d] p-5 rounded-xl">
      <input 
        placeholder="Search" 
        className="w-[100%] rounded-xl px-3 bg-[#0d0d1f] h-10 text-white" 
      />
      <ul className="flex flex-col mt-4">
        {currencyArray.map((currency, index) => (
          <li key={index} className="mb-2">
            <HoldingComponent name={currency} /> {/* Pass currency to HoldingComponent */}
          </li>
        ))}
      </ul>
    </div>
  );
}
