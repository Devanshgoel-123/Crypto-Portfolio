
const SideBar=()=>{
    return (
        <div className="flex flex-col column w-[25%]">
            <div className="border-[#fefefe0d] border-2 justify-center border-l-0 ">
                <h1 className="text-4xl text-white text-white-600 p-5">Portfolio Website</h1>
            </div>
            <div className="border-[#fefefe0d] border-r-2 min-h-screen">
             <h2 className="m-2 text-gray-400 p-3 pl-5 ">Pages</h2>
           <div id="sideMenu" className="flex flex-col space-y-4 text-white text-white-500">
           <button className="sideColumn-Btn menu-item "><h3 className="text-2xl justify-between text-white-700 mt-2">Markets</h3></button>
           <button className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2">Wallets</h3></button>
           <button  className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2">Portfolio</h3></button>
           <button  className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2">History</h3></button>
           <button  className="sideColumn-Btn menu-item"><h3 className="text-2xl justify-between text-white-700 mt-2">Swap</h3></button>
           </div>
            </div>
        </div>
        
    )
}
export default SideBar;