"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { name: "Registered Voters", value: 400, color: "hsl(var(--chart-1))" },
  { name: "Volunteers", value: 300, color: "hsl(var(--chart-2))" },
  { name: "Donors", value: 200, color: "hsl(var(--chart-3))" },
  { name: "Engaged Contacts", value: 100, color: "hsl(var(--chart-4))" },
];

const chartConfig = {
  registered: {
    label: "Registered Voters",
    color: "hsl(var(--chart-1))",
  },
  volunteers: {
    label: "Volunteers",
    color: "hsl(var(--chart-2))",
  },
  donors: {
    label: "Donors",
    color: "hsl(var(--chart-3))",
  },
  engaged: {
    label: "Engaged Contacts",
    color: "hsl(var(--chart-4))",
  },
} as const;

export function VoterDataPieChart() {
  return (
    <Card className="bg-card shadow-xl hover:scale-[1.02] transition-transform duration-300">
      <CardHeader>
        <CardTitle>Voter Data Segmentation</CardTitle>
        <CardDescription>Distribution of different voter segments.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
