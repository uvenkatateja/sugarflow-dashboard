
import { useState } from 'react';
import { 
  Calendar,
  Download,
  FileText,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurContainer from '@/components/ui/BlurContainer';
import GlucoseChart from '@/components/ui/GlucoseChart';
import { mockPatients } from '@/data/mockData';

const Reports = () => {
  const [selectedPatient, setSelectedPatient] = useState(mockPatients[0]);
  const [timeRange, setTimeRange] = useState<'7days' | '30days' | '90days'>('30days');
  
  return (
    <div className="min-h-screen pt-20 pb-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="mb-8 animate-fade-down">
          <h1 className="text-2xl font-bold text-dark-text">Reports</h1>
          <p className="text-medium-text">
            Generate and analyze patient reports
          </p>
        </div>
        
        {/* Report controls */}
        <BlurContainer className="p-5 mb-8 animate-fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div>
                <label htmlFor="patient-select" className="block text-sm text-medium-text mb-1">
                  Patient
                </label>
                <select 
                  id="patient-select"
                  className="bg-white border border-input rounded-md px-3 py-2 w-full md:w-48"
                  value={selectedPatient.id}
                  onChange={(e) => {
                    const id = parseInt(e.target.value);
                    const patient = mockPatients.find(p => p.id === id);
                    if (patient) setSelectedPatient(patient);
                  }}
                >
                  {mockPatients.map(patient => (
                    <option key={patient.id} value={patient.id}>
                      {patient.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="report-period" className="block text-sm text-medium-text mb-1">
                  Time Period
                </label>
                <div className="flex items-center gap-2">
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
            </div>
            
            <div className="flex gap-3 w-full md:w-auto justify-end">
              <Button variant="outline">
                <Calendar size={18} className="mr-2" />
                Custom Date
              </Button>
              <Button>
                <FileText size={18} className="mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </BlurContainer>
        
        {/* Report content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <BlurContainer className="p-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-medium text-dark-text mb-4">Report Options</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-medium-text text-sm cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-blue-accent" />
                    <span>Glucose Readings</span>
                  </label>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-medium-text text-sm cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-blue-accent" />
                    <span>Statistical Analysis</span>
                  </label>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-medium-text text-sm cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-blue-accent" />
                    <span>Trend Identification</span>
                  </label>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-medium-text text-sm cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-blue-accent" />
                    <span>Medication Adherence</span>
                  </label>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-medium-text text-sm cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-accent" />
                    <span>Diet Analysis</span>
                  </label>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-medium-text text-sm cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-accent" />
                    <span>Activity Correlation</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-sm font-medium text-dark-text mb-3">Export Options</h4>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Download size={16} className="mr-2" />
                    PDF Report
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Download size={16} className="mr-2" />
                    CSV Data
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Share2 size={16} className="mr-2" />
                    Share Report
                  </Button>
                </div>
              </div>
            </BlurContainer>
            
            <BlurContainer className="p-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-medium text-dark-text mb-3">Patient Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm"
                    style={{ backgroundColor: selectedPatient.avatarColor }}
                  >
                    {selectedPatient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-text">{selectedPatient.name}</h3>
                    <p className="text-sm text-light-text">{selectedPatient.age} yrs • {selectedPatient.gender}</p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-sm text-medium-text mb-1">Diagnosis</p>
                  <p className="text-sm font-medium text-dark-text">{selectedPatient.diagnosis}</p>
                </div>
                
                <div>
                  <p className="text-sm text-medium-text mb-1">Medication</p>
                  <ul className="text-sm font-medium text-dark-text space-y-1">
                    {selectedPatient.medication.map((med, index) => (
                      <li key={index}>{med}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm text-medium-text mb-1">A1C</p>
                  <p className="text-sm font-medium text-dark-text">{selectedPatient.a1c}%</p>
                </div>
                
                <div>
                  <p className="text-sm text-medium-text mb-1">Last Checkup</p>
                  <p className="text-sm font-medium text-dark-text">
                    {new Date(selectedPatient.lastCheckup).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </BlurContainer>
          </div>
          
          {/* Main report content */}
          <div className="md:col-span-3 space-y-8">
            <BlurContainer className="p-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-lg font-semibold text-dark-text mb-2">Glucose Monitoring Report</h2>
              <p className="text-sm text-medium-text mb-6">
                {timeRange === '7days' && 'Past 7 days glucose readings'}
                {timeRange === '30days' && 'Past 30 days glucose readings'}
                {timeRange === '90days' && 'Past 90 days glucose readings'}
              </p>
              
              <GlucoseChart 
                data={selectedPatient.glucoseReadings} 
                height={300} 
                type="line" 
                timeRange={timeRange}
              />
            </BlurContainer>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BlurContainer className="p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-medium text-dark-text mb-4">Statistical Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-sm text-medium-text">Average Glucose</span>
                    <span className="text-sm font-medium text-dark-text">
                      {Math.round(selectedPatient.glucoseReadings.reduce((sum, r) => sum + r.value, 0) / selectedPatient.glucoseReadings.length)} mg/dL
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-sm text-medium-text">Highest Reading</span>
                    <span className="text-sm font-medium text-red-500">
                      {Math.max(...selectedPatient.glucoseReadings.map(r => r.value))} mg/dL
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-sm text-medium-text">Lowest Reading</span>
                    <span className="text-sm font-medium text-amber-500">
                      {Math.min(...selectedPatient.glucoseReadings.map(r => r.value))} mg/dL
                    </span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-sm text-medium-text">Standard Deviation</span>
                    <span className="text-sm font-medium text-dark-text">
                      {Math.round(
                        Math.sqrt(
                          selectedPatient.glucoseReadings.map(r => r.value).reduce(
                            (sum, val) => sum + Math.pow(val - (selectedPatient.glucoseReadings.reduce((sum, r) => sum + r.value, 0) / selectedPatient.glucoseReadings.length), 2), 0
                          ) / selectedPatient.glucoseReadings.length
                        )
                      )} mg/dL
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-medium-text">Readings in Range</span>
                    <span className="text-sm font-medium text-green-500">
                      {Math.round(
                        (selectedPatient.glucoseReadings.filter(r => r.value >= 70 && r.value <= 180).length / selectedPatient.glucoseReadings.length) * 100
                      )}%
                    </span>
                  </div>
                </div>
              </BlurContainer>
              
              <BlurContainer className="p-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-medium text-dark-text mb-4">Insights & Recommendations</h3>
                
                <div className="space-y-4">
                  <div className="bg-soft-gray p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-dark-text mb-1">Glucose Pattern</h4>
                    <p className="text-xs text-medium-text">
                      {selectedPatient.id === 1 && 'Showing high variability with frequent hyperglycemic episodes.'}
                      {selectedPatient.id === 2 && 'Showing a gradual improvement in glucose control.'}
                      {selectedPatient.id === 3 && 'Showing inconsistent readings with hypoglycemic episodes.'}
                      {selectedPatient.id === 4 && 'Showing steady readings with good control.'}
                      {selectedPatient.id === 5 && 'Showing a trend toward higher readings over time.'}
                      {selectedPatient.id === 6 && 'Showing stable readings with occasional spikes.'}
                    </p>
                  </div>
                  
                  <div className="bg-soft-gray p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-dark-text mb-1">Medication Effectiveness</h4>
                    <p className="text-xs text-medium-text">
                      {selectedPatient.id === 1 && 'Current medication regimen may need adjustment.'}
                      {selectedPatient.id === 2 && 'Medication appears to be effective with current dosage.'}
                      {selectedPatient.id === 3 && 'Consider adjusting insulin dosage to prevent lows.'}
                      {selectedPatient.id === 4 && 'Current medication is well-matched to patient needs.'}
                      {selectedPatient.id === 5 && 'Consider evaluating for additional medication needs.'}
                      {selectedPatient.id === 6 && 'Current medication is maintaining stability.'}
                    </p>
                  </div>
                  
                  <div className="bg-soft-gray p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-dark-text mb-1">Recommendations</h4>
                    <ul className="text-xs text-medium-text list-disc pl-4 space-y-1">
                      {selectedPatient.id === 1 && (
                        <>
                          <li>Consider adjusting evening medication dose</li>
                          <li>Increase monitoring frequency</li>
                          <li>Schedule follow-up in 2 weeks</li>
                        </>
                      )}
                      {selectedPatient.id === 2 && (
                        <>
                          <li>Continue current treatment plan</li>
                          <li>Maintain regular monitoring schedule</li>
                          <li>Review again in 3 months</li>
                        </>
                      )}
                      {selectedPatient.id === 3 && (
                        <>
                          <li>Review carbohydrate counting technique</li>
                          <li>Adjust insulin-to-carb ratio</li>
                          <li>Consider continuous glucose monitoring</li>
                        </>
                      )}
                      {selectedPatient.id === 4 && (
                        <>
                          <li>Continue current regimen</li>
                          <li>Regular follow-up as scheduled</li>
                          <li>Consider reducing monitoring frequency</li>
                        </>
                      )}
                      {selectedPatient.id === 5 && (
                        <>
                          <li>Increase monitoring during pregnancy</li>
                          <li>Adjust insulin based on trimester needs</li>
                          <li>Schedule biweekly checkups</li>
                        </>
                      )}
                      {selectedPatient.id === 6 && (
                        <>
                          <li>Continue monitoring for stability</li>
                          <li>Review medication adherence</li>
                          <li>Consider diet modifications for better control</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </BlurContainer>
            </div>
            
            <BlurContainer className="p-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-medium text-dark-text mb-4">Reading Log</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="pb-2 text-left text-sm font-medium text-medium-text">Date & Time</th>
                      <th className="pb-2 text-left text-sm font-medium text-medium-text">Glucose Level</th>
                      <th className="pb-2 text-left text-sm font-medium text-medium-text">Status</th>
                      <th className="pb-2 text-left text-sm font-medium text-medium-text">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPatient.glucoseReadings
                      .slice()
                      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                      .slice(0, 10)
                      .map((reading, index) => {
                        // Determine status based on value
                        let status = "Normal";
                        let statusClass = "text-green-500";
                        
                        if (reading.value > 180) {
                          status = "High";
                          statusClass = "text-red-500";
                        } else if (reading.value < 70) {
                          status = "Low";
                          statusClass = "text-amber-500";
                        }
                        
                        return (
                          <tr key={index} className="border-b border-border last:border-0">
                            <td className="py-3 text-sm text-dark-text">
                              {new Date(reading.timestamp).toLocaleString()}
                            </td>
                            <td className="py-3 text-sm font-medium text-dark-text">
                              {reading.value} mg/dL
                            </td>
                            <td className="py-3 text-sm font-medium">
                              <span className={statusClass}>{status}</span>
                            </td>
                            <td className="py-3 text-sm text-medium-text">
                              {reading.note || "-"}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              
              {selectedPatient.glucoseReadings.length > 10 && (
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm">
                    View All Readings
                  </Button>
                </div>
              )}
            </BlurContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
