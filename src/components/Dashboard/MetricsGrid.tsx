import React from 'react';
import { cn } from '@/lib/utils';
import StatsCard, { type StatsCardProps } from './StatsCard';

interface MetricsGridProps {
  className?: string;
}

const statsData: StatsCardProps[] = [
  { title: 'REVENUE', value: '$92,463' },
  { title: 'PRODUCTION OUTPUT', value: '315' },
  { title: 'CUSTOMER SATISFACTION SCORE', value: '91%' },
  { title: 'EMPLOYEE ATTENDANCE', value: '96%' },
];

const MetricsGrid: React.FC<MetricsGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4', className)}>
      {statsData.map((stat) => (
        <StatsCard key={stat.title} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default MetricsGrid;
