export default function ListRow(){
    return (
        <div className="bg-[#0d0d1f]  h-10 rounded-lg">
           <ul className="grid grid-flow-col grid-cols-6 text-md space-x-2  text-white font-bold justify-between p-2" style={{ gridTemplateColumns: '1fr 1fr 1fr 1.5fr 1.5fr 1fr' }}>
            <li className="text-gray-300">BitCoin</li>
            <li className="text-gray-300">BTC</li>
            <li className=" text-gray-300">$ 57,938</li>
            <li className="text-center  text-red-500">-0.14%</li>
            <li className="text-center text-[#00bc84]">+0.76%</li>
            <li className="text-gray-300">$1,144,510,225,816</li>
           </ul>
        </div>
    )
}