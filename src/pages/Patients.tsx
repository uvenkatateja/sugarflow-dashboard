
import { useState } from 'react';
import { Search, Filter, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PatientCard from '@/components/ui/PatientCard';
import BlurContainer from '@/components/ui/BlurContainer';
import { mockPatients } from '@/data/mockData';

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter patients based on search
  const filteredPatients = mockPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen pt-20 pb-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="mb-8 animate-fade-down">
          <h1 className="text-2xl font-bold text-dark-text">Patients</h1>
          <p className="text-medium-text">
            Manage and review patient information
          </p>
        </div>
        
        {/* Search and filters */}
        <BlurContainer className="p-5 mb-8 animate-fade-up">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-text" />
              <Input 
                placeholder="Search patients by name or diagnosis..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Filter size={18} />
              </Button>
              <Button>
                <UserPlus size={18} className="mr-2" />
                Add Patient
              </Button>
            </div>
          </div>
        </BlurContainer>
        
        {/* Patients grid */}
        {filteredPatients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPatients.map((patient, index) => (
              <PatientCard 
                key={patient.id} 
                patient={patient} 
                className="animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              />
            ))}
          </div>
        ) : (
          <BlurContainer className="p-10 text-center animate-fade-up">
            <h3 className="text-lg font-medium text-dark-text mb-2">No patients found</h3>
            <p className="text-medium-text mb-4">Try adjusting your search criteria</p>
            <Button variant="outline" onClick={() => setSearchTerm('')}>
              Clear Search
            </Button>
          </BlurContainer>
        )}
      </div>
    </div>
  );
};

export default Patients;
