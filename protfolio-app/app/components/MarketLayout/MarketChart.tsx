"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import Image from "next/image"

import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A simple area chart"



  interface coinDetails{
    name:String,
    price:number[][],
    basis:String
  }
export function MarketChartComponent({name,price,basis}:coinDetails) {
    const chartData = price.map(([timestamp, price], index) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price
      }));
      const chartConfig = {
        price: {
          label: "Price",
          color: "#ffffff",
        },
      };
    
   

  const total = React.useMemo(() => ({
    price: chartData.reduce((acc, curr) => acc + (curr.price || 0), 0),
  }), []);
  return (
    <Card className="bg-[#0d0d1f] mt-4 mr-3 w-[30%] overflow-hidden border-[#fefefe0d] border-2 h-[35%]" style={{flexBasis:`${basis}%`}}>
      <div className="flex flex-row justify-between text-white font-semibold m-5 mb-10 ml-4">
        <div className="flex flex-row justify-start mt-3">
        <Image src={`/images/${name}.png`} className="mr-3 rounded-xl" width={35} height={35} alt=""/>
        <h4 className="text-xl text-white font-bold">{name}</h4>
        </div>
        <h4 className="mt-3">${price[0][1]}</h4>
      </div>
      <CardContent className="p-0 ">
        <ChartContainer config={chartConfig} className=" w-[100%]" >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false}/>
           
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="price"
              type="natural"
              fill="#00563B"
              fillOpacity={0.2}
              stroke="#50c878"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
