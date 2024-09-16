import { useAppSelector } from "@/redux/hooks";
import { 
  ethereumprice, solanaprice, cosmosprice, bitcoinprice, 
  aaveprice, tronprice, tetherprice, chainlinkprice 
} from "../Charts/CoinData";
import SwapValueGraphComponent from "./SwapGraphChart";

const getPrice = (coinName: String): number[][] => {
  switch (coinName.toLowerCase()) {
    case 'ethereum':
      return ethereumprice;
    case 'solana':
      return solanaprice;
    case 'cosmos':
      return cosmosprice;
    case 'bitcoin':
      return bitcoinprice;
    case 'aave':
      return aaveprice;
    case 'tron':
      return tronprice;
    case 'tether':
      return tetherprice;
    case 'chainlink':
      return chainlinkprice;
    default:
      return []; // Return a default value if the coin name is not found
  }
};

export default function SwapChartComponent() {
  const Coins = useAppSelector((store) => store.Coinslice);

  return (
    <>
      <div className="w-[55%] border-[#fefefe0d] border-2 rounded-md h-[550px] p-2 bg-[#151429] flex content-center">
        <div className="mt-5 h-[95%] border-2 border-[#fefefe0d] rounded-xl bg-[#0d0d1f] p-2 flex flex-col align-middle">
          <SwapValueGraphComponent 
            name={Coins.coin1.toLowerCase()} 
            price={getPrice(Coins.coin1)} 
          />
          <SwapValueGraphComponent 
            name={Coins.coin2.toLowerCase()} 
            price={getPrice(Coins.coin2)} 
          />
        </div>
      </div>
    </>
  );
}
