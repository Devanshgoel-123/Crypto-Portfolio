export default function SwapChartComponent(){
    return<>
    <div className="w-[55%] border-[#fefefe0d] border-2 rounded-md h-[550px] p-5">
        <ul className="border-2 border-[#fefefe0d] flex flex-row text-white space-x-w justify-evenly p-2 w-[70%]">
            <li className="sideColumn-Btn px-4 rounded-xl">1D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl">7D</li>
            <li className="sideColumn-Btn  px-4 rounded-xl">1M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl">3M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl">6M</li>
            <li className="sideColumn-Btn  px-4 rounded-xl">1Y</li>
        </ul>
        <div className="mt-5 h-[300px] border-2 border-[#fefefe0d] rounded-lg">

        </div>
    </div>
    </>
}