import SwapValueComp from "./SwapValue"
import SwapChartComponent from "./SwapChart"
export default function SwapComplete(){
    return (
        <div className="flex flex-row space-x-5">
            <SwapValueComp />
            <SwapChartComponent />
        </div>
    )
}