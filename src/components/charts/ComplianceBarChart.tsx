"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
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

const chartData = [
  { quarter: "Q1", compliance: 70, errors: 30 }, // Starting point with higher errors
  { quarter: "Q2", compliance: 85, errors: 15 },
  { quarter: "Q3", compliance: 92, errors: 8 },
  { quarter: "Q4", compliance: 98, errors: 2 }, // Near perfect compliance
];

const chartConfig = {
  compliance: {
    label: "Compliance Rate",
    color: "hsl(var(--chart-1))",
  },
  errors: {
    label: "Errors",
    color: "hsl(var(--chart-2))",
  },
} as const;

export function ComplianceBarChart() {
  return (
    <Card className="bg-white shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <CardHeader>
        <CardTitle>Compliance Performance</CardTitle>
        <CardDescription>Quarterly compliance rates and error reduction.</CardDescription>
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
                dataKey="quarter"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Legend />
              <Bar
                dataKey="compliance"
                stackId="a" // Stack bars
                fill="var(--color-compliance)"
                radius={[4, 4, 0, 0]} // Rounded top corners for compliance
              />
              <Bar
                dataKey="errors"
                stackId="a" // Stack bars
                fill="var(--color-errors)"
                radius={[0, 0, 4, 4]} // Rounded bottom corners for errors
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}