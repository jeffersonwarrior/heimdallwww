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
  { quarter: "Q1", compliance: 92, errors: 8 },
  { quarter: "Q2", compliance: 95, errors: 5 },
  { quarter: "Q3", compliance: 98, errors: 2 },
  { quarter: "Q4", compliance: 99, errors: 1 },
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
                fill="var(--color-compliance)"
                radius={4}
              />
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