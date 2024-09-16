import Image from "next/image"
interface tokenData{
    name:string,
    symbol:String,
    CurrentPrice:String,
    DayChange:String,
    Volume:String,
    MarketCap:String
}
export default function ListRow({name,symbol,CurrentPrice,DayChange,Volume,MarketCap}:tokenData){
    return (
        <div className="bg-[#0d0d1f]  h-14  rounded-lg">
           <ul className="grid grid-flow-col grid-cols-6 text-md space-x-2  text-white font-bold justify-between p-2" style={{ gridTemplateColumns: '1fr 1fr 1fr 1.5fr 1.5fr 1fr' }}>
            <div className="flex flex-row justify-left">
            <Image src={`/images/${name.toLowerCase()}.png`} className=" rounded-xl h-full" width={25} height={25} alt=""/>
            <li className="text-gray-300 ml-3">{name}</li>
            </div>
            <li className="text-gray-300">{symbol.toUpperCase()}</li>
            <li className=" text-gray-300">$ {CurrentPrice}</li>
            <li className={`text-center ${ Number(DayChange) > 0 ? "text-[#00bc84]" : "text-red-500"}`}>{DayChange}</li>
            <li className="text-center text-gray-300">{Volume}</li>
            <li className="text-gray-300">${MarketCap}</li>
           </ul>
        </div>
    )
}