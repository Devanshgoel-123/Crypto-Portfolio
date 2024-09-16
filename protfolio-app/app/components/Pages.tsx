"use client";
import { useState } from "react";
import { ImPieChart } from "react-icons/im";
import { LiaChartBarSolid } from "react-icons/lia";
import { FaBriefcase } from "react-icons/fa6";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { MdFilterListAlt } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

interface SetLayoutProps {
  eventClick: (name: string) => void;
}

export default function Pages({ eventClick }: SetLayoutProps) {
  const [activeButton, setActiveButton] = useState<string>("markets");

  const handleClick = (name: string) => {
    setActiveButton(name); // Set the active button
    eventClick(name);
  };

  return (
    <div className="border-[#fefefe0d] border-2 border-t-0 w-[25%]">
      <h2 className="m-2 text-gray-400 p-3 pl-5 ">Pages</h2>
      <div id="menu-item" className="flex flex-col space-y-4">
        <button
          className={`menu-item ${activeButton === "markets" ? "sideColumnBtn " : "bg-transparent text-[#9baeca]"}`}
          onClick={() => handleClick("markets")}
        >
          <h3 className="text-2xl justify-between font-bold mt-2 flex flex-row "><ImPieChart  className="mr-5"/>Markets</h3>
        </button>
        <button
          className={`menu-item ${activeButton === "wallets" ? "sideColumnBtn" : "bg-transparent text-[#9baeca]"}`}
          onClick={() => handleClick("wallets")}
        >
          <h3 className="text-2xl justify-between font-bold mt-2 flex flex-row "><FaWallet  className="mr-5"/>Wallets</h3>
        </button>
        <button
          className={`menu-item ${activeButton === "portfolio" ? "sideColumnBtn" : "bg-transparent text-[#9baeca]"}`}
          onClick={() => handleClick("portfolio")}
        >
          <h3 className="text-2xl justify-between font-bold mt-2  flex flex-row "><FaBriefcase  className="mr-5"/>Portfolio</h3>
        </button>
        <button
          className={`menu-item ${activeButton === "history" ? "sideColumnBtn" : "bg-transparent text-[#9baeca]"}`}
          onClick={() => handleClick("history")}
        >
          <h3 className="text-2xl justify-between font-bold mt-2 flex flex-row "><LiaChartBarSolid  className="mr-5"/>History</h3>
        </button>
        <button
          className={`menu-item ${activeButton === "swap" ? "sideColumnBtn" : "bg-transparent text-[#9baeca]"}`}
          onClick={() => handleClick("swap")}
        >
          <h3 className="text-2xl justify-between font-bold mt-2 flex flex-row "><MdSwapHorizontalCircle className="mr-5" />Transfer</h3>
        </button>
        <button
          className={`menu-item ${activeButton === "watchList" ? "sideColumnBtn" : "bg-transparent text-[#9baeca]"}`}
          onClick={() => handleClick("watchList")}
        >
          <h3 className="text-2xl justify-between  mt-2 flex flex-row "><MdFilterListAlt  className="mr-5"/>WatchList</h3>
        </button>
      </div>
    </div>
  );
}
