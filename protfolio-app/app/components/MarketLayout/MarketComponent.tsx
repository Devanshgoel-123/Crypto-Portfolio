
import { MarketChartComponent } from "./MarketChart";
import { ethereumprice,bitcoinprice,tetherprice,tronprice,aaveprice,chainlinkprice,solanaprice, stellarprice } from "../Charts/CoinData";
export default function MarketComponent() {
  return (
    <div className="h-[80vh] flex flex-col p-5 border-2 border-[#FEFEFE0D] rounded-xl">
      <div className="border-b-2 border-[#FEFEFE0D] pb-[20px]">
        <h1 className="font-extrabold text-white text-lg">
          Top 10 Tokenized baskets of high quality DeFi projects
        </h1>
      </div>
      <div className="flex flex-row flex-wrap h-full overflow-y-scroll mt-5 ">
        <MarketChartComponent price={ethereumprice} name="ethereum" basis="60" />
        <MarketChartComponent price={bitcoinprice} name="BitCoin" basis="36" />
        <MarketChartComponent price={tetherprice} name="tether" basis="36" />
        <MarketChartComponent price={solanaprice} name="solana" basis="60" />
        <MarketChartComponent price={aaveprice} name="aave" basis="48" />
        <MarketChartComponent price={tronprice} name="tron" basis="48" />
        <MarketChartComponent price={chainlinkprice} name="chainlink" basis="48" />
        <MarketChartComponent price={stellarprice} name="stellar" basis="48" />
         {/* Add dogecoin and cosmos coin */}
      </div>
    </div>
  );
}
