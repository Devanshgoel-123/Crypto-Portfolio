export default function WatchListTitle(){
    return(
        <div className="text-white">
            <ul className="grid grid-flow-col grid-cols-6 text-xl space-x-2" style={{ gridTemplateColumns: '1fr 1fr 1fr 1.5fr 1.5fr 1fr' }}>
                <li className="text-left">Name</li>
                <li>TokenLabel</li>
                <li>Current Price</li>
                <li className="text-center">1 day change</li>
                <li className="text-center">Total Volume</li>
                <li> Market Cap </li>
            </ul>
        </div>
    )
}