import WalletInfo from "./WalletInfo"
import WalletProvider from "./WalletProvider"
import WalletValue from "./WalletValue"
export default function WalletComplete(){
    return <>
        <WalletInfo/>
        <div className="flex flex-col w-[55%] space-y-5">
            <WalletProvider/>
            <WalletValue/>
        </div>
        </>
    
}