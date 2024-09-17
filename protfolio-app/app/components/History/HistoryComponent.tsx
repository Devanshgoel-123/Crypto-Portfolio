import { useState } from "react";
import { HistoryChartComponent } from "./HistoryChart";
import { ethereumprice, tetherprice, solanaprice, bitcoinprice,aaveprice,tronprice,stellarprice,chainlinkprice } from "../Charts/CoinData";

export default function HistoryComponent() {

  const timePeriods = {
    "1D": 1,
    "7D": 7,
    "15D": 15,
    "25D": 25,
    "1M": 30, // Assuming 1M means 30 elements
  };
  
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("1M");

  const handleTimePeriodChange = (period: string) => {
    setSelectedTimePeriod(period);
  };
  const numberOfElements = timePeriods[selectedTimePeriod];
  return (
    <div className="flex flex-row py-5 h-[100%] mr-3 flex-wrap justify-around align-top">
    
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%]">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {Object.keys(timePeriods).map((period) => (
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
        <HistoryChartComponent name="bitcoin" price={bitcoinprice.slice(0,numberOfElements)} />
      </div>

      
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%]">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {Object.keys(timePeriods).map((period) => (
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
        <HistoryChartComponent name="ethereum" price={ethereumprice.slice(0,numberOfElements)} />
      </div>

     
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {Object.keys(timePeriods).map((period) => (
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
        <HistoryChartComponent name="solana" price={solanaprice.slice(0,numberOfElements)} />
      </div>

      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {Object.keys(timePeriods).map((period) => (
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
        <HistoryChartComponent name="tether" price={tetherprice.slice(0,numberOfElements)} />
      </div>
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {Object.keys(timePeriods).map((period) => (
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
        <HistoryChartComponent name="Aave" price={aaveprice.slice(0,numberOfElements)} />
      </div>
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {Object.keys(timePeriods).map((period) => (
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
        <HistoryChartComponent name="Stellar" price={stellarprice.slice(0,numberOfElements)} />
      </div>
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {Object.keys(timePeriods).map((period) => (
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
        <HistoryChartComponent name="Tron" price={tronprice.slice(0,numberOfElements)} />
      </div>
      <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
          {Object.keys(timePeriods).map((period) => (
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
        <HistoryChartComponent name="ChainLink" price={chainlinkprice.slice(0,numberOfElements)} />
      </div>
    </div>
  );
}
