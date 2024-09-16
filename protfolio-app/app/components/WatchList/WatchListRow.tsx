import Image from "next/image";

interface TokenData {
  name: string;
  symbol: string;
  CurrentPrice: string;
  DayChange: string;
  Volume: string;
  MarketCap: string;
}

export default function ListRow({
  name,
  symbol,
  CurrentPrice,
  DayChange,
  Volume,
  MarketCap,
}: TokenData) {
  return (
    <div className="bg-[#0d0d1f] h-10 rounded-lg text-lg">
      <ul
        className="grid grid-flow-col grid-cols-6 text-md space-x-2 text-white font-extrabold justify-between p-2 items-center"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1.5fr 1.5fr 1fr" }}
      >
        <div className="flex items-center">
          <Image
            src={`/images/${name.toLowerCase()}.png`}
            className="rounded-xl"
            width={25}
            height={25}
            alt=""
          />
          <li className="text-gray-300 ml-3">{name}</li>
        </div>
        <li className="text-gray-300 flex items-center justify-center">
          {symbol.toUpperCase()}
        </li>
        <li className="text-gray-300 flex items-center justify-center">
          $ {CurrentPrice}
        </li>
        <li
          className={`flex items-center justify-center ${
            Number(DayChange) > 0 ? "text-[#00bc84]" : "text-red-500"
          }`}
        >
          {DayChange}
        </li>
        <li className="text-center text-gray-300 flex items-center justify-center">
          {Volume}
        </li>
        <li className="text-gray-300 flex items-center justify-center">
          ${MarketCap}
        </li>
      </ul>
    </div>
  );
}
