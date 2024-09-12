"use client"
import ConnectButton from "./components/WalletConnect";
import SideBar from "./components/Sidebar";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Pages from "./components/Pages";
import {  useState } from "react";

export default function Home() {
    const [active,setActive]=useState<String>("Swap");
     const handleClick=(name:String)=>{
      console.log(name);
       setActive(name);
     }
  return (
    <>
    <div className="flex flex-col">
      <div className="flex flex-row border-[#fefefe0d] border-2  justify-between bg-[#151429]">
      <SideBar/>
      <Navbar/>
      </div>
      <div className="flex flex-row min-w-[70%] bg-[#151429]">
      <Pages eventClick={handleClick} />
      <Layout name={active}/>
      </div>
    </div>
   
   
    </>
  )
}
