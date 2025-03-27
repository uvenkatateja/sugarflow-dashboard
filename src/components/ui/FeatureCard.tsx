
import { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import BlurContainer from './BlurContainer';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const FeatureCard = ({ 
  title, 
  description, 
  icon,
  className,
  style
}: FeatureCardProps) => {
  return (
    <BlurContainer 
      className={cn(
        'p-6 hover:shadow-card hover:scale-[1.02] transition-all duration-300',
        className
      )}
      style={style}
    >
      <div className="w-12 h-12 rounded-full bg-light-blue flex items-center justify-center text-blue-accent mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-dark-text mb-2">{title}</h3>
      <p className="text-medium-text">{description}</p>
    </BlurContainer>
  );
};

export default FeatureCard;
