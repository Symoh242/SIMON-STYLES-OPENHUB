
'use client';

import { useState, useEffect, useMemo } from 'react';
import type { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Define a type for the data points
interface DataPoint {
  name: string;
  value: number;
}

const generateRandomData = (): DataPoint[] => {
  const names = ['P1', 'P2', 'P3', 'P4', 'P5']; // Generic data point names
  return names.map((name) => ({
    name,
    // Generate random values between 20 and 100 for bar heights
    value: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
  }));
};

interface AnimatedBarChartProps {
  className?: ClassValue;
}

export function AnimatedForexChartPlaceholder({ className }: AnimatedBarChartProps) {
  const [data, setData] = useState<DataPoint[]>(generateRandomData());

  useEffect(() => {
    // Set an interval to update the chart data, creating the animation effect
    const interval = setInterval(() => {
      setData(generateRandomData());
    }, 1500); // Update data every 1.5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Memoize colors to prevent unnecessary re-renders if theme context changes but colors don't
  const barColor = useMemo(() => "hsl(var(--primary))", []);
  const gridColor = useMemo(() => "hsl(var(--border))", []);
  const textColor = useMemo(() => "hsl(var(--muted-foreground))", []);
  const tooltipBg = useMemo(() => "hsl(var(--popover))", []); // Using popover for tooltip background
  const tooltipBorder = useMemo(() => "hsl(var(--border))", []); // Using border for tooltip border

  return (
    <div className={cn("w-full h-full p-4 rounded-lg shadow-md bg-card", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10, // Increased top margin for title space if added later
            right: 10, // Added right margin
            left: -15, // Adjusted left margin for Y-axis labels
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="name" stroke={textColor} fontSize={12} interval={0} tickLine={false} axisLine={false} />
          <YAxis stroke={textColor} fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            wrapperStyle={{ outline: 'none' }} // Remove default Recharts outline
            contentStyle={{
              backgroundColor: tooltipBg,
              borderColor: tooltipBorder,
              borderRadius: 'var(--radius)', // Use theme radius
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // A standard shadow
              padding: '8px 12px', // Custom padding
            }}
            labelStyle={{ color: textColor, marginBottom: '4px', fontSize: '12px', fontWeight: '600' }}
            itemStyle={{ color: textColor, fontSize: '12px' }}
            cursor={{ fill: 'hsl(var(--accent) / 0.2)' }} // Use accent color for cursor hover
          />
          <Bar dataKey="value" fill={barColor} radius={[4, 4, 0, 0]} barSize={30} animationDuration={500} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
