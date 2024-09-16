
import { MarketChartComponent } from "./MarketChart";
import { ethPrice,BitcoinPrice,aaveData,tetherPrice,tronData,chainLink,stellarData,solanaPrice } from "../Charts/CoinData";
export default function MarketComponent() {
  return (
    <div className="h-[80vh] flex flex-col p-5 border-2 border-[#FEFEFE0D] rounded-xl">
      <div className="border-b-2 border-[#FEFEFE0D] pb-[20px]">
        <h1 className="font-extrabold text-white text-lg">
          Top 10 Tokenized baskets of high quality DeFi projects
        </h1>
      </div>
      <div className="flex flex-row flex-wrap h-full overflow-y-scroll mt-5 ">
        <MarketChartComponent price={ethPrice} name="ethereum" basis="60" />
        <MarketChartComponent price={BitcoinPrice} name="BitCoin" basis="36" />
        <MarketChartComponent price={tetherPrice} name="tether" basis="36" />
        <MarketChartComponent price={solanaPrice} name="solana" basis="60" />
        <MarketChartComponent price={aaveData} name="aave" basis="48" />
        <MarketChartComponent price={tronData} name="tron" basis="48" />
        <MarketChartComponent price={chainLink} name="chainlink" basis="48" />
        <MarketChartComponent price={stellarData} name="stellar" basis="48" />
         {/* Add dogecoin and cosmos coin */}
      </div>
    </div>
  );
}
