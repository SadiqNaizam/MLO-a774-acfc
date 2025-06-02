import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Boxes } from 'lucide-react';

interface TotalProductsCardProps {
  className?: string;
}

const totalProducts = 364;
const dateRange = '06/19/2024 - 06/25/2024';

const TotalProductsCard: React.FC<TotalProductsCardProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-md rounded-lg flex flex-col items-center justify-center', className)}>
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-lg font-semibold text-foreground">TOTAL PRODUCTS SOLD</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-grow">
        <div className="text-7xl font-bold text-primary mb-4">
          {totalProducts}
        </div>
        <Boxes className="h-20 w-20 text-primary mb-4" strokeWidth={1.5}/>
        <p className="text-sm text-muted-foreground">{dateRange}</p>
      </CardContent>
    </Card>
  );
};

export default TotalProductsCard;
