import { ethPrice } from "../Charts/CoinData"

import  SwapValueGraphComponent from "./SwapGraphChart"

interface chartNames{
    name1:String,
    name2:String,
}
export default function SwapChartComponent(){
    return<>
    <div className="w-[55%] border-[#fefefe0d] border-2 rounded-md h-[550px] p-2 bg-[#151429] flex content-center">
        <div className="mt-5 h-[95%] border-2 border-[#fefefe0d] rounded-xl bg-[#0d0d1f] p-2 flex flex-col align-middle">
            <SwapValueGraphComponent name="ethereum" price={ethPrice}/>
            <SwapValueGraphComponent name="ethereum" price={ethPrice}/>
        </div>
    </div>
    </>
}