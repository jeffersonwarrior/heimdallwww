"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Data to show average monthly errors before and after Heimdall
const chartData = [
  { period: "Before Heimdall", errors: 100 }, // Example: 100 errors per month
  { period: "After Heimdall", errors: 1 },   // Example: 1 error per month (99% reduction)
];

const chartConfig = {
  errors: {
    label: "Compliance Errors",
    color: "hsl(var(--chart-2))", // Using the error color for impact
  },
} as const;

export function ComplianceBarChart() {
  return (
    <Card className="bg-card shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <CardHeader>
        <CardTitle>Compliance Error Reduction</CardTitle>
        <CardDescription>Average monthly compliance errors before and after Heimdall.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={[0, 100]} // Max errors to show
                tickFormatter={(value) => `${value}`}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar
                dataKey="errors"
                fill="var(--color-errors)"
                radius={4}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}