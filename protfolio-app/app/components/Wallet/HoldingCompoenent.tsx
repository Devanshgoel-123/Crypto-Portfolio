import Image from "next/image"
interface holdingProps{
    name:String,
    balance:String,
    symbol:String,
    
}
const HoldingComponent=({name,balance,symbol}:holdingProps)=>{
    return (
        <div className="bg-[#0d0d1f] w-[100%] p-5 border-[#fefefe0d] border-2 rounded-lg flex flex-row justify-start mt-3 hover:bg-[#3a57e8]">
        <Image src="/images/solana.png" height={45} width={45} alt="" className="bg-transparent rounded-[100%] "/>
        <div className="flex flex-col items-left ml-5 min-w-fit overflow-hidden">
        <h4 className="text-gray-300 text-2xl font-extrabold">{name.slice(0,1).toUpperCase()+name.slice(1,)}</h4>
        <h5 className="text-[#9Baeca] m-0 text-lg ">Balance : <span className="text-[#00bc84]">{balance} {symbol}</span></h5>
        </div>
        
    </div>
    )
   
}
export default HoldingComponent;