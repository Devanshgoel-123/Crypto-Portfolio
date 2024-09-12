interface holdingProps{
    name:String,
  
}
const HoldingComponent=({name}:holdingProps)=>{
    return (
        <div className="bg-[#0d0d1f] w-[100%] h-fit p-5 border-[#fefefe0d] border-2 rounded-lg flex flex-row justify-between mt-3">
        <h4 className="text-gray-300">{name}</h4>
        <h5 className="text-gray-300 m-0">Balance : <span className="text-[#00bc84]">0.00</span></h5>
    </div>
    )
   
}
export default HoldingComponent;