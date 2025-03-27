
import { Link } from 'react-router-dom';
import { 
  Activity, 
  BarChart4, 
  CalendarClock, 
  ChevronRight, 
  Clock, 
  FileSpreadsheet,
  PieChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurContainer from '@/components/ui/BlurContainer';
import FeatureCard from '@/components/ui/FeatureCard';
import Footer from '@/components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-light-blue/30 to-transparent">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[600px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm text-blue-accent px-3 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-down">
              <span className="bg-blue-accent/10 px-2 py-0.5 rounded-full mr-2">New</span>
              Introducing DiabetesManager v2.0
            </div>
            
            <h1 className="heading-xl text-dark-text mb-6 animate-fade-up">
              Monitor Your Diabetes With Confidence and Ease
            </h1>
            
            <p className="paragraph mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              DiabetesManager makes glucose tracking simple and insightful, helping you 
              maintain better control of your health with powerful analytics and personalized insights.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/login">Try Demo Login</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-accent/10 text-blue-accent rounded-full text-sm font-medium mb-4">
              Features
            </div>
            <h2 className="heading-lg text-dark-text mb-4">
              Everything You Need for Effective Diabetes Management
            </h2>
            <p className="paragraph">
              Our comprehensive platform is designed to help patients and healthcare providers 
              track, analyze, and manage diabetes with precision and ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              title="Glucose Tracking"
              description="Easily log and monitor your blood sugar levels with intuitive visual charts and trends."
              icon={<Activity size={24} />}
              className="animate-fade-up" style={{ animationDelay: '0.1s' }}
            />
            <FeatureCard
              title="Detailed Analytics"
              description="Get insights from your data with advanced statistics and pattern recognition."
              icon={<BarChart4 size={24} />}
              className="animate-fade-up" style={{ animationDelay: '0.2s' }}
            />
            <FeatureCard
              title="Medication Reminders"
              description="Never miss a dose with customizable alerts and scheduling."
              icon={<Clock size={24} />}
              className="animate-fade-up" style={{ animationDelay: '0.3s' }}
            />
            <FeatureCard
              title="Health Reports"
              description="Generate comprehensive reports to share with your healthcare providers."
              icon={<FileSpreadsheet size={24} />}
              className="animate-fade-up" style={{ animationDelay: '0.4s' }}
            />
            <FeatureCard
              title="Appointment Management"
              description="Schedule and track healthcare appointments in one convenient place."
              icon={<CalendarClock size={24} />}
              className="animate-fade-up" style={{ animationDelay: '0.5s' }}
            />
            <FeatureCard
              title="Nutritional Insights"
              description="Understand how different foods affect your glucose levels with meal tracking."
              icon={<PieChart size={24} />}
              className="animate-fade-up" style={{ animationDelay: '0.6s' }}
            />
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/login" className="inline-flex items-center">
                Explore All Features <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-block px-3 py-1 bg-blue-accent/10 text-blue-accent rounded-full text-sm font-medium mb-4">
                About DiabetesManager
              </div>
              <h2 className="heading-lg text-dark-text mb-4">
                Designed with Patients and Providers in Mind
              </h2>
              <p className="paragraph mb-6">
                DiabetesManager was developed by healthcare professionals and people living with diabetes 
                to create an intuitive, effective solution for diabetes management.
              </p>
              <p className="paragraph mb-6">
                Our platform prioritizes simplicity and clarity while providing the powerful tools needed 
                to maintain control of your health. We believe that better data leads to better decisions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Evidence-based insights tailored to your needs',
                  'Seamless sharing with your healthcare team',
                  'Prioritizing your privacy and data security',
                  'Regular updates based on user feedback'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-accent/20 flex items-center justify-center mt-1 mr-2">
                      <div className="w-2 h-2 rounded-full bg-blue-accent"></div>
                    </div>
                    <span className="text-medium-text">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/login">Try It Now</Link>
              </Button>
            </div>
            
            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/20 to-blue-accent/5 rounded-2xl transform rotate-3"></div>
              <BlurContainer className="p-6 transform -rotate-2 relative z-10">
                <div className="bg-blue-accent/10 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-lg text-dark-text mb-2">Patient Dashboard</h3>
                  <div className="h-40 bg-white/60 rounded-lg flex items-center justify-center">
                    <BarChart4 size={48} className="text-blue-accent/40" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 p-3 rounded-lg">
                    <h4 className="font-medium text-sm text-dark-text mb-1">Glucose</h4>
                    <p className="text-2xl font-semibold text-blue-accent">124 <span className="text-xs font-normal">mg/dL</span></p>
                  </div>
                  <div className="bg-white/60 p-3 rounded-lg">
                    <h4 className="font-medium text-sm text-dark-text mb-1">A1C</h4>
                    <p className="text-2xl font-semibold text-blue-accent">6.5%</p>
                  </div>
                </div>
              </BlurContainer>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-gradient-to-b from-blue-accent/10 to-blue-accent/0 rounded-b-full opacity-50 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-dark-text mb-6">
              Take Control of Your Diabetes Management Today
            </h2>
            <p className="paragraph mb-8">
              Join thousands of users who are already benefiting from our comprehensive, 
              user-friendly diabetes management platform.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/login">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
