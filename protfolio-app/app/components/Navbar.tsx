import WalletConnectionButton from "./WalletConnect";
import { FaSearch } from "react-icons/fa";
export default function Navbar(){
    return (
        <div className="min-w-[75%] border-[#fefefe0d] border-l-2 flex justify-between p-5">
            <div className="flex flex-row bg-[#0d0d1f]  items-center w-[50%] px-5 rounded-xl">
            <FaSearch  className=" text-white"/>
           <input placeholder="Search" className="w-[100%] rounded-sm px-3  bg-[#0d0d1f]  h-10 text-white ml-3"></input>
            </div>
           
           <WalletConnectionButton/>
        
        </div>

    )
}