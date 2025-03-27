
import { useState } from 'react';
import { ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlurContainer from './BlurContainer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Patient } from '@/data/mockData';

type PatientCardProps = {
  patient: Patient;
  className?: string;
  compact?: boolean;
};

const PatientCard = ({ 
  patient,
  className,
  compact = false
}: PatientCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, name, age, gender, lastGlucoseLevel, lastGlucoseDate, avatarColor, glucoseStatus } = patient;
  
  // Determine status color based on glucose level
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high':
        return 'text-red-500 bg-red-50';
      case 'low':
        return 'text-amber-500 bg-amber-50';
      case 'normal':
        return 'text-green-500 bg-green-50';
      default:
        return 'text-blue-500 bg-blue-50';
    }
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  if (compact) {
    return (
      <BlurContainer 
        className={cn(
          'p-4 hover:shadow-card transition-all duration-300 cursor-pointer',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={`/patients/${id}`} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm"
              style={{ backgroundColor: avatarColor }}
            >
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-medium text-dark-text">{name}</h3>
              <p className="text-sm text-light-text">{age} yrs • {gender}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn("text-sm px-2 py-1 rounded-full", getStatusColor(glucoseStatus))}>
              {lastGlucoseLevel} mg/dL
            </span>
            <ChevronRight 
              size={16} 
              className={cn(
                "text-light-text transition-transform duration-300", 
                isHovered && "transform translate-x-1"
              )} 
            />
          </div>
        </Link>
      </BlurContainer>
    );
  }
  
  return (
    <BlurContainer 
      className={cn(
        'p-6 hover:shadow-card transition-all duration-300',
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium"
            style={{ backgroundColor: avatarColor }}
          >
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-dark-text">{name}</h3>
            <p className="text-sm text-light-text">{age} yrs • {gender}</p>
          </div>
        </div>
        <span className={cn("text-sm px-2 py-1 rounded-full", getStatusColor(glucoseStatus))}>
          {glucoseStatus.charAt(0).toUpperCase() + glucoseStatus.slice(1)}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-soft-gray rounded-lg p-3">
          <p className="text-xs text-light-text mb-1">Last Glucose</p>
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-blue-accent" />
            <span className="font-medium text-dark-text">{lastGlucoseLevel} mg/dL</span>
          </div>
        </div>
        <div className="bg-soft-gray rounded-lg p-3">
          <p className="text-xs text-light-text mb-1">Last Checkup</p>
          <p className="font-medium text-dark-text">{formatDate(lastGlucoseDate)}</p>
        </div>
      </div>
      
      <Button className="w-full" variant="outline" asChild>
        <Link to={`/patients/${id}`}>
          View Details
        </Link>
      </Button>
    </BlurContainer>
  );
};

export default PatientCard;
