"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/Components/ui/chart";

export const description = "A linear area chart";

const chartData = [
    { month: "January", pengunjung: 186 },
    { month: "February", pengunjung: 305 },
    { month: "March", pengunjung: 237 },
    { month: "April", pengunjung: 73 },
    { month: "May", pengunjung: 24 },
    { month: "Jun", pengunjung: 214 },
    { month: "Jul", pengunjung: 201 },
    { month: "Aug", pengunjung: 180 },
    { month: "Sep", pengunjung: 300 },
    { month: "Oct", pengunjung: 123 },
    { month: "Nov", pengunjung: 280 },
    { month: "Dec", pengunjung: 293 },
];

const chartConfig = {
    pengunjung: {
        label: "Pengunjung",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

export default function LineChartComp() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Kunjungan Website</CardTitle>
                <CardDescription>
                    Total pengunjung website tahun ini
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    indicator="dot"
                                    hideLabel
                                />
                            }
                        />
                        <Area
                            dataKey="pengunjung"
                            type="linear"
                            fill="var(--color-pengunjung)"
                            fillOpacity={0.4}
                            stroke="var(--color-pengunjung)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Naik 5.2% bulan ini!
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Januari - Desember 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
