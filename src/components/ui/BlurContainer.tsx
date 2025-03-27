
import { CSSProperties, ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type BlurContainerProps = {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'light' | 'dark';
  style?: CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

const BlurContainer = ({ 
  children, 
  className,
  variant = 'default',
  style,
  ...props
}: BlurContainerProps) => {
  return (
    <div 
      className={cn(
        'rounded-xl transition-all duration-300',
        variant === 'default' && 'bg-white/80 backdrop-blur-md shadow-subtle',
        variant === 'light' && 'bg-white/50 backdrop-blur-sm shadow-sm',
        variant === 'dark' && 'bg-dark-text/5 backdrop-blur-md shadow-md',
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
