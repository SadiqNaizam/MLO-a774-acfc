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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  CartesianGrid
} from 'recharts';

interface ProductSalesChartProps {
  className?: string;
}

const productSalesData = [
  { region: 'Region 1', sales: 70 },
  { region: 'Region 2', sales: 103 },
  { region: 'Region 3', sales: 116 },
  { region: 'Region 4', sales: 35 },
  { region: 'Region 5', sales: 40 },
  { region: 'South East', sales: 92 }, 
  { region: 'North West', sales: 65 },
];

const ProductSalesChart: React.FC<ProductSalesChartProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-md rounded-lg', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">PRODUCT SALES</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={productSalesData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis 
              type="category" 
              dataKey="region" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              width={80} 
              tickLine={false} 
              axisLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'hsl(var(--muted))', fillOpacity: 0.3 }}
              contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
            />
            <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}>
              <LabelList dataKey="sales" position="right" style={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProductSalesChart;
