interface setlayoutProps{
    eventClick:(name:string)=>void;
}
export default function Pages({eventClick}:setlayoutProps){
    return (
        <div className="border-[#fefefe0d] border-2 border-t-0 min-h-screen w-[25%]">
             <h2 className="m-2 text-gray-400 p-3 pl-5 ">Pages</h2>
           <div id="sideMenu" className="flex flex-col space-y-4 text-white text-white-500">
           <button className="sideColumn-Btn menu-item "><h3 className="text-2xl justify-between text-white-700 mt-2" onClick={()=>eventClick("markets")}>Markets</h3></button>
           <button className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2" onClick={()=>eventClick("wallets")}>Wallets</h3></button>
           <button  className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2" onClick={()=>eventClick("portfolio")}>Portfolio</h3></button>
           <button  className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2" onClick={()=>eventClick("history")}>History</h3></button>
           <button  className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2" onClick={()=>eventClick("swap")}>Transfer</h3></button>
           <button  className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2" onClick={()=>eventClick("watchList")}>WatchList</h3></button>
           </div>
         </div>
        
    )
}