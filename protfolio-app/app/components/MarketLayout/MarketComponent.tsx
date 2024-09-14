import { ChartComponent } from "../Charts/Chart";
import { MarketChartComponent } from "./MarketChart";
import bitcoin from "../Charts/Bitcoin";
import { ethPrice,tetherPrice,cosmosCoin,solanaPrice } from "../Charts/CoinData";
export default function MarketComponent(){
   return (
    <div className="h-[80vh] flex flex-col p-5">
        <div className="border-b-2 border-[rgba(254, 254, 254, .05)] pb-[20px]">
            <h1 className="font-bold text-white text-lg">
            Top 10 Tokenized baskets of high quality DeFi projects
            </h1>
        </div>
        <div className="flex flex-row flex-wrap h-full overflow-y-scroll mt-5">
            <MarketChartComponent price={ethPrice} name="ethereum"/>
            <MarketChartComponent price={bitcoin.prices} name="BitCoin"/>
            <MarketChartComponent name="tether" price={tetherPrice}/>
            <MarketChartComponent name="solana" price={solanaPrice}/>
            <MarketChartComponent price={ethPrice} name="ethereum"/>
            <MarketChartComponent price={bitcoin.prices} name="BitCoin"/>
            <MarketChartComponent name="tether" price={tetherPrice}/>
            <MarketChartComponent name="solana" price={solanaPrice}/>
        </div>
    </div>
   )
}
