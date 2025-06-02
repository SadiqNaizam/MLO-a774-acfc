import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

interface WebsiteTrafficChartProps {
  className?: string;
}

const websiteTrafficData = [
  { date: '06/19', visits: 65, pageViews: 30 },
  { date: '06/20', visits: 110, pageViews: 50 },
  { date: '06/21', visits: 40, pageViews: 20 },
  { date: '06/22', visits: 125, pageViews: 55 },
  { date: '06/23', visits: 60, pageViews: 35 },
  { date: '06/24', visits: 30, pageViews: 15 },
  { date: '06/25', visits: 80, pageViews: 40 },
];

const WebsiteTrafficChart: React.FC<WebsiteTrafficChartProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-md rounded-lg', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">WEBSITE TRAFFIC</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart 
            data={websiteTrafficData}
            margin={{ top: 5, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--foreground))" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="hsl(var(--foreground))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis 
              yAxisId="left" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              label={{ value: 'Visits', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false}
              label={{ value: 'Page Views', angle: 90, position: 'insideRight', fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
              itemStyle={{ color: 'hsl(var(--foreground))' }}
              cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 1, strokeDasharray: '3 3' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} formatter={(value) => <span style={{ color: 'hsl(var(--foreground))' }}>{value}</span>} />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="visits" 
              stroke="hsl(var(--foreground))" 
              fillOpacity={1} 
              fill="url(#colorVisits)" 
              strokeWidth={2} 
              name="Website Visits"
              dot={{ r:4, fill: 'hsl(var(--foreground))', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: 'hsl(var(--foreground))', strokeWidth: 0 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="pageViews" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2} 
              name="Website Page Views"
              dot={{ r:4, fill: 'hsl(var(--primary))', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: 'hsl(var(--primary))', strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WebsiteTrafficChart;
