
import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  TooltipProps
} from 'recharts';
import { AreaChart, Area } from 'recharts';
import { GlucoseReading } from '@/data/mockData';
import { cn } from '@/lib/utils';
import BlurContainer from './BlurContainer';

type GlucoseChartProps = {
  data: GlucoseReading[];
  className?: string;
  type?: 'line' | 'area';
  showRanges?: boolean;
  height?: number;
  timeRange?: '7days' | '30days' | '90days';
};

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const reading = payload[0].payload as GlucoseReading;
    return (
      <BlurContainer variant="dark" className="p-3 border border-slate-200/20">
        <p className="text-sm font-medium text-dark-text">{new Date(reading.timestamp).toLocaleDateString()}</p>
        <p className="text-sm text-medium-text">{new Date(reading.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        <p className="mt-1 text-sm font-semibold text-blue-accent">{reading.value} mg/dL</p>
      </BlurContainer>
    );
  }
  return null;
};

const GlucoseChart = ({ 
  data, 
  className, 
  type = 'line', 
  showRanges = true,
  height = 300,
  timeRange = '7days'
}: GlucoseChartProps) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  // Filter data based on time range
  const filteredData = (() => {
    const now = new Date();
    const DAY_MS = 24 * 60 * 60 * 1000;
    
    let cutoffDate: Date;
    switch (timeRange) {
      case '30days':
        cutoffDate = new Date(now.getTime() - 30 * DAY_MS);
        break;
      case '90days':
        cutoffDate = new Date(now.getTime() - 90 * DAY_MS);
        break;
      default: // 7days
        cutoffDate = new Date(now.getTime() - 7 * DAY_MS);
    }
    
    return data.filter(reading => new Date(reading.timestamp) >= cutoffDate);
  })();
  
  // Format x-axis ticks based on time range
  const formatXAxisTick = (timestamp: string) => {
    const date = new Date(timestamp);
    switch (timeRange) {
      case '30days':
      case '90days':
        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      default: // 7days
        return date.toLocaleDateString(undefined, { weekday: 'short' });
    }
  };
  
  // Get min and max for y-axis domain with some padding
  const values = data.map(d => d.value);
  const minValue = Math.max(0, Math.min(...values) - 20);
  const maxValue = Math.max(...values) + 20;
  
  // Reference values for diabetes ranges
  const highRange = 180;
  const lowRange = 70;
  
  // Custom gradient for area chart
  const gradientId = `glucoseGradient-${type}`;
  
  const renderChart = () => {
    if (type === 'area') {
      return (
        <AreaChart
          data={filteredData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          onMouseMove={(e) => {
            if (e.activePayload) {
              setHoveredValue(e.activePayload[0].payload.value);
            }
          }}
          onMouseLeave={() => setHoveredValue(null)}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0A84FF" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#0A84FF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="timestamp" 
            tickFormatter={formatXAxisTick}
            tick={{ fontSize: 12, fill: '#697586' }}
            axisLine={{ stroke: '#e0e0e0' }}
            tickLine={false}
          />
          <YAxis 
            domain={[minValue, maxValue]} 
            tick={{ fontSize: 12, fill: '#697586' }}
            axisLine={false}
            tickLine={false}
            tickCount={5}
          />
          <Tooltip content={<CustomTooltip />} />
          {showRanges && (
            <>
              <ReferenceLine y={highRange} stroke="#FDA4AF" strokeDasharray="3 3" />
              <ReferenceLine y={lowRange} stroke="#FCD34D" strokeDasharray="3 3" />
            </>
          )}
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#0A84FF" 
            fill={`url(#${gradientId})`}
            strokeWidth={2}
            activeDot={{ r: 6, fill: "#0A84FF", stroke: "#fff", strokeWidth: 2 }}
          />
        </AreaChart>
      );
    }
    
    return (
      <LineChart
        data={filteredData}
        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        onMouseMove={(e) => {
          if (e.activePayload) {
            setHoveredValue(e.activePayload[0].payload.value);
          }
        }}
        onMouseLeave={() => setHoveredValue(null)}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis 
          dataKey="timestamp" 
          tickFormatter={formatXAxisTick}
          tick={{ fontSize: 12, fill: '#697586' }}
          axisLine={{ stroke: '#e0e0e0' }}
          tickLine={false}
        />
        <YAxis 
          domain={[minValue, maxValue]} 
          tick={{ fontSize: 12, fill: '#697586' }}
          axisLine={false}
          tickLine={false}
          tickCount={5}
        />
        <Tooltip content={<CustomTooltip />} />
        {showRanges && (
          <>
            <ReferenceLine y={highRange} stroke="#FDA4AF" strokeDasharray="3 3" />
            <ReferenceLine y={lowRange} stroke="#FCD34D" strokeDasharray="3 3" />
          </>
        )}
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#0A84FF" 
          strokeWidth={2} 
          dot={false}
          activeDot={{ r: 6, fill: "#0A84FF", stroke: "#fff", strokeWidth: 2 }}
        />
      </LineChart>
    );
  };
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-2">
        <div>
          {hoveredValue !== null ? (
            <div className="transition-opacity duration-150">
              <p className="text-2xl font-semibold text-dark-text">{hoveredValue} <span className="text-sm font-normal text-light-text">mg/dL</span></p>
            </div>
          ) : (
            <div className="opacity-0 h-8">•</div>
          )}
        </div>
        
        {showRanges && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-red-200"></span>
              <span className="text-xs text-light-text">High &gt;{highRange}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-amber-200"></span>
              <span className="text-xs text-light-text">Low &lt;{lowRange}</span>
            </div>
          </div>
        )}
      </div>
      
      <ResponsiveContainer width="100%" height={height}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default GlucoseChart;
