
import { useState } from 'react';
import { 
  Activity, 
  Droplets, 
  FileText, 
  LineChart, 
  PieChart, 
  Pill,
  Users, 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurContainer from '@/components/ui/BlurContainer';
import GlucoseChart from '@/components/ui/GlucoseChart';
import PatientCard from '@/components/ui/PatientCard';
import StatisticCard from '@/components/ui/StatisticCard';
import { mockPatients, getStatistics, healthInsights } from '@/data/mockData';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState<'7days' | '30days' | '90days'>('7days');
  const stats = getStatistics();
  
  // Select first 3 patients for recent list
  const recentPatients = mockPatients.slice(0, 3);
  
  // Get first patient for detailed view
  const selectedPatient = mockPatients[0];
  
  // Get first patient's glucose readings for chart
  const glucoseData = selectedPatient.glucoseReadings;
  
  // Format the next upcoming checkup
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  // Health insights (random selection)
  const selectedInsights = healthInsights.slice(0, 4);
  
  return (
    <div className="min-h-screen pb-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <StatisticCard
            title="Average Glucose Level"
            value={stats.averageGlucose}
            subtitle="mg/dL"
            icon={<LineChart size={20} />}
            trend={{ value: 3.2, direction: 'down' }}
            className="animate-fade-up"
          />
          <StatisticCard
            title="Total Patients"
            value={stats.patientCount}
            icon={<Users size={20} />}
            className="animate-fade-up" 
          />
          <StatisticCard
            title="Critical Alerts"
            value={stats.criticalAlerts}
            icon={<Activity size={20} />}
            trend={{ value: 1, direction: 'up' }}
            className="animate-fade-up"
          />
          <StatisticCard
            title="Checkups Due"
            value={stats.checkupsDue}
            icon={<FileText size={20} />}
            className="animate-fade-up"
          />
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Glucose chart */}
            <BlurContainer className="p-6 animate-fade-up">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-dark-text">Glucose Monitoring</h2>
                  <p className="text-sm text-medium-text">Patient: {selectedPatient.name}</p>
                </div>
                <div className="flex items-center space-x-2 mt-3 sm:mt-0">
                  <Button
                    variant={timeRange === '7days' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setTimeRange('7days')}
                  >
                    7 Days
                  </Button>
                  <Button 
                    variant={timeRange === '30days' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setTimeRange('30days')}
                  >
                    30 Days
                  </Button>
                  <Button 
                    variant={timeRange === '90days' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setTimeRange('90days')}
                  >
                    90 Days
                  </Button>
                </div>
              </div>
              
              <GlucoseChart 
                data={glucoseData} 
                height={300} 
                type="area" 
                timeRange={timeRange}
              />
            </BlurContainer>
            
            {/* Health insights */}
            <BlurContainer className="p-6 animate-fade-up">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-dark-text">Health Insights</h2>
                  <p className="text-sm text-medium-text">Personalized recommendations</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="#">
                    View All
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedInsights.map((insight, index) => (
                  <div 
                    key={index} 
                    className="bg-soft-gray p-4 rounded-lg hover:shadow-subtle transition-shadow"
                  >
                    <div className="flex items-start mb-2">
                      <div className="mr-3">
                        {insight.category === 'clinical' && <Pill size={20} className="text-blue-accent" />}
                        {insight.category === 'lifestyle' && <Activity size={20} className="text-blue-accent" />}
                        {insight.category === 'nutrition' && <PieChart size={20} className="text-blue-accent" />}
                        {insight.category === 'general' && <Droplets size={20} className="text-blue-accent" />}
                      </div>
                      <h3 className="font-medium text-dark-text leading-tight">{insight.title}</h3>
                    </div>
                    <p className="text-sm text-medium-text pl-8">{insight.description}</p>
                  </div>
                ))}
              </div>
            </BlurContainer>
          </div>
          
          {/* Sidebar - 1/3 width */}
          <div className="space-y-8">
            {/* Patients list */}
            <BlurContainer className="p-6 animate-fade-up">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-dark-text">Recent Patients</h2>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/patients">
                    View All
                  </Link>
                </Button>
              </div>
              
              <div className="space-y-3">
                {recentPatients.map((patient) => (
                  <PatientCard 
                    key={patient.id} 
                    patient={patient} 
                    compact
                  />
                ))}
              </div>
            </BlurContainer>
            
            {/* Upcoming appointments */}
            <BlurContainer className="p-6 animate-fade-up">
              <h2 className="text-lg font-semibold text-dark-text mb-4">Upcoming Checkups</h2>
              
              <div className="space-y-4">
                {recentPatients.slice(0, 2).map((patient) => (
                  <div key={patient.id} className="flex items-center p-3 bg-soft-gray rounded-lg">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3"
                      style={{ backgroundColor: patient.avatarColor }}
                    >
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-text">{patient.name}</h3>
                      <p className="text-sm text-light-text">{formatDate(patient.nextCheckup)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                Schedule New Checkup
              </Button>
            </BlurContainer>
            
            {/* Summary card */}
            <BlurContainer className="p-6 animate-fade-up">
              <h2 className="text-lg font-semibold text-dark-text mb-4">Glucose Breakdown</h2>
              
              <div className="bg-soft-gray p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-medium-text">High Readings</span>
                  <span className="text-sm font-medium text-red-500">{stats.readingDistribution[0].value}%</span>
                </div>
                <div className="w-full bg-white/50 rounded-full h-2">
                  <div 
                    className="bg-red-400 h-2 rounded-full" 
                    style={{ width: `${stats.readingDistribution[0].value}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-soft-gray p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-medium-text">Normal Readings</span>
                  <span className="text-sm font-medium text-green-500">{stats.readingDistribution[1].value}%</span>
                </div>
                <div className="w-full bg-white/50 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full" 
                    style={{ width: `${stats.readingDistribution[1].value}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-soft-gray p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-medium-text">Low Readings</span>
                  <span className="text-sm font-medium text-amber-500">{stats.readingDistribution[2].value}%</span>
                </div>
                <div className="w-full bg-white/50 rounded-full h-2">
                  <div 
                    className="bg-amber-400 h-2 rounded-full" 
                    style={{ width: `${stats.readingDistribution[2].value}%` }}
                  ></div>
                </div>
              </div>
            </BlurContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
