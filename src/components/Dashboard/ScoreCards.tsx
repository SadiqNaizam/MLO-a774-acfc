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
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts';

interface ScoreCardItemProps {
  label: string;
  value: number;
}

interface ScoreCardsProps {
  className?: string;
}

const scoresData: ScoreCardItemProps[] = [
  { label: 'SCORE #1', value: 85 },
  { label: 'SCORE #2', value: 73 },
  { label: 'SCORE #3', value: 92 },
  { label: 'SCORE #4', value: 54 },
  { label: 'SCORE #5', value: 75 },
];

const ScoreIndicator: React.FC<ScoreCardItemProps> = ({ label, value }) => {
  const chartData = [{ name: label, value, fill: 'hsl(var(--primary))' }];

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width={150} height={150}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="90%"
          barSize={12}
          data={chartData}
          startAngle={90}
          endAngle={90 + (value / 100) * 360 * -1} // Negative for clockwise from top
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background={{ fill: 'hsl(var(--muted))' }}
            dataKey="value"
            cornerRadius={6}
            isAnimationActive={true}
          />
          {/* Custom label for center text */}
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            className="text-3xl font-bold fill-primary"
          >
            {value}
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
};

const ScoreCards: React.FC<ScoreCardsProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-md rounded-lg', className)}>
      <CardContent className="p-6">
        {scoresData.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {scoresData.map((score) => (
              <ScoreIndicator key={score.label} label={score.label} value={score.value} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No scores to display.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ScoreCards;
