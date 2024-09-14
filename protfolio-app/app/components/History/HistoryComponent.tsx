
import { HistoryChartComponent } from "./HistoryChart"
import { ethPrice,tetherPrice,solanaPrice,cosmosCoin } from "../Charts/CoinData"
import bitcoin from "../Charts/Bitcoin"
export default function HistoryComponent(){
    // useEffect(()=>{
    //    getData();
    // },[])
    return (
    
        <div className="flex flex-row py-5 h-[100%]mr-3 flex-wrap justify-around align-top ">
            <div className="border-[#fefefe0d] border-2 rounded-md h-fit  p-3 bg-[#151429]  flex-basis w-[45%]">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
            <li className="sideColumn-Btn px-4 rounded-xl py-1">1D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">7D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">1M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">3M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">6M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">1Y</li>
        </ul>
           <HistoryChartComponent name="bitcoin" price={bitcoin.prices}/>
    </div>
    <div className="border-[#fefefe0d] border-2 rounded-md h-fit bg-[#151429] p-3 flex-basis w-[45%]">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
            <li className="sideColumn-Btn px-4 rounded-xl py-1">1D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">7D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">1M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">3M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">6M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">1Y</li>
        </ul>
           <HistoryChartComponent name="ethereum" price={ethPrice}/>
    </div>
    <div className="border-[#fefefe0d] border-2 rounded-md h-fit  p-3 bg-[#151429] flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
            <li className="sideColumn-Btn px-4 rounded-xl py-1">1D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">7D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">1M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">3M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">6M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">1Y</li>
        </ul>
           <HistoryChartComponent name="solana" price={solanaPrice}/>
    </div>
    <div className="border-[#fefefe0d] border-2 rounded-md h-fit p-3 bg-[#151429]  flex-basis w-[45%] mt-4">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-2 justify-evenly p-2">
            <li className="sideColumn-Btn px-4 rounded-xl py-1">1D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">7D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">1M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">3M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">6M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl py-1">1Y</li>
        </ul>
           <HistoryChartComponent name="tether" price={tetherPrice}/>
    </div>
        </div>
    )
}