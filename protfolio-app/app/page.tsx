
import ConnectButton from "./components/WalletConnect";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import WalletLayout from "./components/WalletLayout";


export default function Home() {
 
  
  return (
    <>
    <div className="flex flex-row">
    <SideBar/>
    <div className="flex flex-col min-w-[70%]">
    <Navbar/>
    <WalletLayout/>
    </div>
    </div>
    <ConnectButton/>
    </>
  )
}
