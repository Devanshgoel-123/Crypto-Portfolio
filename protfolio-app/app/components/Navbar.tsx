import WalletConnectionButton from "./WalletConnect";

export default function Navbar(){
    return (
        <div className="min-w-[75%] border-[#fefefe0d] border-l-2 flex justify-between p-5">
           
           <input placeholder="Search" className="w-[70%] rounded-sm px-3  bg-[#0d0d1f]  h-10 text-white"></input>
           <WalletConnectionButton/>
        
        </div>

    )
}