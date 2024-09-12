export default function InputBox(){
    return(
        <div className="bg-[#0d0d1f] w-[100%] h-fit p-5 space-y-3 border-[#fefefe0d] border-2 rounded-lg">
                    <div className="flex flex-row justify-between ">
                        <h1 className="text-white text-4xl mt-2 font-bold">0.4</h1>
                        <select className="p-3 rounded-xl bg-transparent text-white border-[#fefefe0d] border-2 font-extrabold text-xl">
                                <option className="text-2xl">ETH</option>
                                <option className="text-2xl">USDC</option>
                        </select>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h5 className="text-[#00bc84]">$769.52</h5>
                        <h5 className="text-gray-300">Balance: <span className="text-[#00bc84]">0.66</span></h5>
                    </div>
            </div>
    )
}