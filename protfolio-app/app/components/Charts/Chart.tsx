"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import bitcoin from "./Bitcoin"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive line chart"

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
}

const chartData = bitcoin.prices.map(([timestamp, price], index) => ({
  date: new Date(timestamp).toLocaleDateString(),
  price
}));

const chartConfig = {
  price: {
    label: "Price",
    color: "#ffffff",
    
  },
};


export function ChartComponent() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("price");

  const total = React.useMemo(() => ({
    price: chartData.reduce((acc, curr) => acc + (curr.price || 0), 0),
  }), []);

  return (
    <Card className="bg-transparent border-0">
      <CardHeader className="flex flex-col ">
        <div className="flex justify-center">
          <CardTitle className="text-white font-extrabold">Transfer Data</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false}/>

            {/* <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            /> */}
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={chartConfig[activeChart].color || 'black'}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

