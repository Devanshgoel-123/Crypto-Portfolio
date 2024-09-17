import { useState, useEffect } from "react";
import { ethereumprice, bitcoinprice, aaveprice, tetherprice, solanaprice } from "../Charts/CoinData";

interface SelectValue {
  select: (value: string) => void;
}

export default function InputBox({ select }: SelectValue) {
  const [value, setValue] = useState("0");
  const [selectedCurrency, setSelectedCurrency] = useState("bitcoin");
  const [currentPrice, setCurrentPrice] = useState(0); // State to store current price
  
  const availableCurrency = [
    "bitcoin",
    "tether",
    "solana",
    "ethereum",
    "xrp",
    "chainlink",
    "tron",
    "aave",
    "ripple",
  ];

  // Function to handle currency selection
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedCurrency(selected);
    select(selected);
  };

  // UseEffect to update the price when the currency changes
  useEffect(() => {
    switch (selectedCurrency) {
      case "bitcoin":
        setCurrentPrice(bitcoinprice[0][1]); // Assuming you're showing the latest price
        break;
      case "ethereum":
        setCurrentPrice(ethereumprice[0][1]);
        break;
      case "tether":
        setCurrentPrice(tetherprice[0][1]);
        break;
      case "solana":
        setCurrentPrice(solanaprice[0][1]);
        break;
      case "aave":
        setCurrentPrice(aaveprice[0][1]);
        break;
      
      default:
        setCurrentPrice(0);
        break;
    }
  }, [selectedCurrency]); 

  return (
    <div className="bg-[#0d0d1f] w-[100%] h-fit p-5 space-y-3 border-[#fefefe0d] border-2 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        {/* Input for amount */}
        <input
          placeholder="0.000"
          className="text-white text-2xl font-medium w-[80%] bg-transparent border-[#fefefe0d] border-2 rounded-xl p-1 mr-2"
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
       
        <select
          className="p-3 rounded-xl bg-transparent text-white border-[#fefefe0d] border-2 font-extrabold text-xl"
          onChange={handleChange}
        >
          {availableCurrency.map((item, index) => (
            <option value={item} key={index}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row justify-between">
        <h5 className="text-[#00bc84]">{(currentPrice*Number(value)).toString().slice(0,10)} USD</h5>
        <h5 className="text-gray-300">
          Balance: <span className="text-[#00bc84]">0.00</span>
        </h5>
      </div>
    </div>
  );
}
