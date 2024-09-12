import InputBox from "./InputComponent"
export default function SwapValueComp(){
    return (
        <div className="w-[40%] p-5 flex flex-col h-[550px] border-[#fefefe0d] border-2 rounded-md space-y-4 rounded-xl">
                <InputBox/>
                <InputBox/>
                <div className="bg-[#0d0d1f] w-[100%] h-fit p-5 space-y-3 border-[#fefefe0d] border-2 rounded-lg">
                <div className="flex flex-row justify-between">
                        <h5 className="text-[#00bc84]">Gas fee estimate</h5>
                        <h5 className="text-gray-300">0.00346ETH</h5>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-[#00bc84]">Total Liquidity</h5>
                        <h5 className="text-gray-300">1536.4 USDC</h5>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-[#00bc84]">APR</h5>
                        <h5 className="text-gray-300">18%</h5>
                    </div>
                </div>
                <button  className="rounded-sm px-3 bg-[#0d0d1f] border-[#fefefe0d] h-14 text-white sideColumn-Btn  text-xl">
                    CONFIRM
                </button>
        </div>
    )
}