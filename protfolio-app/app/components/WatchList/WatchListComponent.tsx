import ListRow from "./WatchListRow";
import WatchListTitle from "./WatchListTitle";
import CoinsData from "./WatchListData";
import { List } from "lucide-react";
export default function WatchListComponent(){
  return(
    <>
    <div className="flex flex-col justify-items-center space-y-5">
      
        <WatchListTitle/>
        
        <div className="space-y-4">
        {CoinsData.map((item,index)=>{
          return <ListRow name={item.name} symbol={item.symbol} CurrentPrice={String(item.current_price)}   MarketCap={String(item.market_cap)} DayChange={String(item.price_change_percentage_24h)} Volume={String(item.total_volume)}/>
        })}
        {CoinsData.map((item,index)=>{
          return <ListRow name={item.name} symbol={item.symbol} CurrentPrice={String(item.current_price)}   MarketCap={String(item.market_cap)} DayChange={String(item.price_change_percentage_24h)} Volume={String(item.total_volume)}/>
        })}
        </div>

    </div>
    </>
  )
}