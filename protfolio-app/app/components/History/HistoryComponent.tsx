import { useState } from "react";
import { HistoryChartComponent } from "./HistoryChart";
import { ethPrice, tetherPrice, solanaPrice, BitcoinPrice,aaveData,tronData,stellarData,chainLink } from "../Charts/CoinData";

export default function HistoryComponent() {

  const timePeriods = ["1D", "7D", "1M", "3M", "6M", "1Y"];
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("1D");

  const handleTimePeriodChange = (period: string) => {
    setSelectedTimePeriod(period);
  };

  return (
    <div className="flex flex-row py-5 h-[100%] mr-3 flex-wrap justify-around align-top">
      {/* Bitcoin */}
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%]">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {timePeriods.map((period) => (
            <li
              key={period}
              className={`sideColumn-btn px-4 rounded-xl py-1 ${
                selectedTimePeriod === period ? "sideColumnBtn" : ""
              }`}
              onClick={() => handleTimePeriodChange(period)}
            >
              {period}
            </li>
          ))}
        </ul>
        <HistoryChartComponent name="bitcoin" price={BitcoinPrice} />
      </div>

      {/* Ethereum */}
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%]">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {timePeriods.map((period) => (
            <li
              key={period}
              className={`sideColumn-btn px-4 rounded-xl py-1 ${
                selectedTimePeriod === period ? "sideColumnBtn" : ""
              }`}
              onClick={() => handleTimePeriodChange(period)}
            >
              {period}
            </li>
          ))}
        </ul>
        <HistoryChartComponent name="ethereum" price={ethPrice} />
      </div>

      {/* Solana */}
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {timePeriods.map((period) => (
            <li
              key={period}
              className={`sideColumn-btn px-4 rounded-xl py-1 ${
                selectedTimePeriod === period ? "sideColumnBtn" : ""
              }`}
              onClick={() => handleTimePeriodChange(period)}
            >
              {period}
            </li>
          ))}
        </ul>
        <HistoryChartComponent name="solana" price={solanaPrice} />
      </div>

      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {timePeriods.map((period) => (
            <li
              key={period}
              className={`sideColumn-btn px-4 rounded-xl py-1 ${
                selectedTimePeriod === period ? "sideColumnBtn" : ""
              }`}
              onClick={() => handleTimePeriodChange(period)}
            >
              {period}
            </li>
          ))}
        </ul>
        <HistoryChartComponent name="tether" price={tetherPrice} />
      </div>
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {timePeriods.map((period) => (
            <li
              key={period}
              className={`sideColumn-btn px-4 rounded-xl py-1 ${
                selectedTimePeriod === period ? "sideColumnBtn" : ""
              }`}
              onClick={() => handleTimePeriodChange(period)}
            >
              {period}
            </li>
          ))}
        </ul>
        <HistoryChartComponent name="Aave" price={aaveData} />
      </div>
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {timePeriods.map((period) => (
            <li
              key={period}
              className={`sideColumn-btn px-4 rounded-xl py-1 ${
                selectedTimePeriod === period ? "sideColumnBtn" : ""
              }`}
              onClick={() => handleTimePeriodChange(period)}
            >
              {period}
            </li>
          ))}
        </ul>
        <HistoryChartComponent name="Stellar" price={stellarData} />
      </div>
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {timePeriods.map((period) => (
            <li
              key={period}
              className={`sideColumn-btn px-4 rounded-xl py-1 ${
                selectedTimePeriod === period ? "sideColumnBtn" : ""
              }`}
              onClick={() => handleTimePeriodChange(period)}
            >
              {period}
            </li>
          ))}
        </ul>
        <HistoryChartComponent name="Tron" price={tronData} />
      </div>
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {timePeriods.map((period) => (
            <li
              key={period}
              className={`sideColumn-btn px-4 rounded-xl py-1 ${
                selectedTimePeriod === period ? "sideColumnBtn" : ""
              }`}
              onClick={() => handleTimePeriodChange(period)}
            >
              {period}
            </li>
          ))}
        </ul>
        <HistoryChartComponent name="ChainLink" price={chainLink} />
      </div>
    </div>
  );
}
