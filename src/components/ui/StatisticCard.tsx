
import { ReactNode } from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import BlurContainer from './BlurContainer';

type StatisticCardProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'flat';
  };
  className?: string;
  subtitle?: string;
};

const StatisticCard = ({ 
  title, 
  value, 
  icon, 
  trend, 
  className,
  subtitle 
}: StatisticCardProps) => {
  return (
    <BlurContainer className={cn("p-5 hover:shadow-card transition-all duration-300", className)}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-medium-text">{title}</h3>
        {icon && <div className="text-blue-accent">{icon}</div>}
      </div>
      
      <div className="mb-1">
        <span className="text-2xl font-semibold text-dark-text">{value}</span>
        {subtitle && <span className="text-xs text-light-text ml-1">{subtitle}</span>}
      </div>
      
      {trend && (
        <div className="flex items-center">
          <div 
            className={cn(
              "flex items-center text-xs mr-2",
              trend.direction === 'up' && "text-red-500",
              trend.direction === 'down' && "text-green-500",
              trend.direction === 'flat' && "text-slate-400"
            )}
          >
            {trend.direction === 'up' && <ArrowUp size={14} className="mr-1" />}
            {trend.direction === 'down' && <ArrowDown size={14} className="mr-1" />}
            {trend.direction === 'flat' && <Minus size={14} className="mr-1" />}
            {trend.value}%
          </div>
          <span className="text-xs text-light-text">vs last week</span>
        </div>
      )}
    </BlurContainer>
  );
};

export default StatisticCard;
