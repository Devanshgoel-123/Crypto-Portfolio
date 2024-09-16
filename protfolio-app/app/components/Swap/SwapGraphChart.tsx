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
    
  }
export default function SwapValueGraphComponent({name,price}:coinDetails) {
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
    
  return (
    <Card className="bg-[#0d0d1f] my-5 mr-3 w-[100%] h-[45%] overflow-hidden border-[#fefefe0d] border-2  ">
      <div className="flex flex-row justify-between text-white font-semibold m-5 mb-10 ml-4 overflow-y-scroll">
        <div className="flex flex-row justify-start">
        <h4>{name}</h4>
        <Image src={`/images/${name}.png`} className="ml-3 rounded-xl" width={25} height={25} alt=""/>
        </div>
        <h4>${price[0][1]}</h4>
      </div>
      <CardContent className="p-0 ">
        <ChartContainer config={chartConfig} className="w-[100%]">
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
              fillOpacity={0.4}
              stroke="#50c878"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
