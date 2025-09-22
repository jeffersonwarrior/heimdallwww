"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "Jan", engagement: 180, previous: 150 },
  { month: "Feb", engagement: 200, previous: 160 },
  { month: "Mar", engagement: 220, previous: 170 },
  { month: "Apr", engagement: 250, previous: 180 },
  { month: "May", engagement: 280, previous: 190 },
  { month: "Jun", engagement: 320, previous: 200 },
];

const chartConfig = {
  engagement: {
    label: "Engagement",
    color: "hsl(var(--chart-1))",
  },
  previous: {
    label: "Previous",
    color: "hsl(var(--chart-2))",
  },
} as const;

export function EngagementLineChart() {
  return (
    <Card className="bg-card shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <CardHeader>
        <CardTitle>Voter Engagement</CardTitle>
        <CardDescription>Monthly engagement trends compared to previous period.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
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
              <YAxis tickLine={false} axisLine={false} tickMargin={8} domain={[0, 400]} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Legend />
              <Line
                dataKey="engagement"
                type="monotone"
                stroke="var(--color-engagement)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-engagement)",
                }}
                activeDot={{
                  r: 6,
                  fill: "var(--color-engagement)",
                }}
              />
              <Line
                dataKey="previous"
                type="monotone"
                stroke="var(--color-previous)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-previous)",
                }}
                activeDot={{
                  r: 6,
                  fill: "var(--color-previous)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
