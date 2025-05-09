
import { Link } from 'react-router-dom';
import { 
  Activity, 
  BarChart4, 
  CalendarClock, 
  ChevronRight, 
  Clock, 
  FileSpreadsheet,
  PieChart,
  ListChecks,
  BellRing,
  Shield,
  Users,
  Smartphone,
  PlayCircle,
  Medal,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurContainer from '@/components/ui/BlurContainer';
import FeatureCard from '@/components/ui/FeatureCard';
import Footer from '@/components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-light-blue/30 to-transparent overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[600px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm text-blue-accent px-3 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-down">
              <span className="bg-blue-accent/10 px-2 py-0.5 rounded-full mr-2">New</span>
              <span className="hidden sm:inline">Introducing</span> Diabetes Care v2.0
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6 animate-fade-up leading-tight">
              Monitor Your Glucose Levels With Ease
            </h1>
            
            <p className="text-lg text-medium-text mb-8 animate-fade-up">
              Diabetes Care makes blood sugar monitoring simple and insightful, helping you 
              maintain better control of your health with powerful analytics and personalized insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/login">Try Demo Login</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#features">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      {/* Stats Banner */}
      <section className="py-8 bg-soft-gray relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-accent">98%</p>
              <p className="text-sm md:text-base text-medium-text">User Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-accent">10k+</p>
              <p className="text-sm md:text-base text-medium-text">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-accent">24/7</p>
              <p className="text-sm md:text-base text-medium-text">Support Available</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-accent">50+</p>
              <p className="text-sm md:text-base text-medium-text">Health Providers</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              Everything You Need for Effective Glucose Management
            </h2>
            <p className="text-lg text-medium-text">
              Our comprehensive platform is designed to help patients and healthcare providers 
              track, analyze, and manage glucose levels with precision and ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              title="Glucose Tracking"
              description="Easily log and monitor your blood sugar levels with intuitive visual charts and trends."
              icon={<Activity size={24} />}
              className="animate-fade-up"
            />
            <FeatureCard
              title="Detailed Analytics"
              description="Get insights from your data with advanced statistics and pattern recognition."
              icon={<BarChart4 size={24} />}
              className="animate-fade-up"
            />
            <FeatureCard
              title="Medication Reminders"
              description="Never miss a dose with customizable alerts and scheduling."
              icon={<Clock size={24} />}
              className="animate-fade-up"
            />
            <FeatureCard
              title="Health Reports"
              description="Generate comprehensive reports to share with your healthcare providers."
              icon={<FileSpreadsheet size={24} />}
              className="animate-fade-up"
            />
            <FeatureCard
              title="Appointment Management"
              description="Schedule and track healthcare appointments in one convenient place."
              icon={<CalendarClock size={24} />}
              className="animate-fade-up"
            />
            <FeatureCard
              title="Nutritional Insights"
              description="Understand how different foods affect your glucose levels with meal tracking."
              icon={<PieChart size={24} />}
              className="animate-fade-up"
            />
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link to="/login" className="inline-flex items-center">
                Explore All Features <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-light-blue/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-accent/10 text-blue-accent rounded-full text-sm font-medium mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              Simple, Effective Glucose Management
            </h2>
            <p className="text-lg text-medium-text">
              Our easy-to-use platform helps you stay on top of your health with just a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center animate-fade-up bg-white/50 rounded-xl p-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-4">
                <ListChecks size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Track Your Readings</h3>
              <p className="text-medium-text">Record your glucose readings with our easy-to-use interface. Add notes about meals, medication, and activities.</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-fade-up bg-white/50 rounded-xl p-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-4">
                <BarChart4 size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. View Insights</h3>
              <p className="text-medium-text">Our system analyzes your data to identify patterns and trends, helping you understand your body better.</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-fade-up bg-white/50 rounded-xl p-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent mb-4">
                <FileSpreadsheet size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Share Reports</h3>
              <p className="text-medium-text">Generate detailed reports to share with your healthcare provider, making appointments more productive.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <div className="inline-block px-3 py-1 bg-blue-accent/10 text-blue-accent rounded-full text-sm font-medium mb-4">
                Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
                Why Choose Diabetes Care?
              </h2>
              <p className="text-lg text-medium-text mb-6">
                Our platform offers unique advantages that make glucose management easier and more effective than ever before.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <BlurContainer className="p-4 flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent shrink-0">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Mobile Friendly</h3>
                    <p className="text-sm text-medium-text">Track your glucose from anywhere, anytime.</p>
                  </div>
                </BlurContainer>
                
                <BlurContainer className="p-4 flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent shrink-0">
                    <BellRing size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Smart Alerts</h3>
                    <p className="text-sm text-medium-text">Get notified about important changes in your readings.</p>
                  </div>
                </BlurContainer>
                
                <BlurContainer className="p-4 flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent shrink-0">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Data Security</h3>
                    <p className="text-sm text-medium-text">Your health information is encrypted and secure.</p>
                  </div>
                </BlurContainer>
                
                <BlurContainer className="p-4 flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Family Sharing</h3>
                    <p className="text-sm text-medium-text">Share access with family members or caregivers.</p>
                  </div>
                </BlurContainer>
              </div>
              
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/login">Get Started Today</Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-accent/20 to-blue-accent/5 rounded-2xl transform rotate-3"></div>
                <BlurContainer className="p-6 transform -rotate-2 relative z-10">
                  <div className="bg-blue-accent/10 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-lg text-dark-text mb-2">Glucose Trends</h3>
                    <div className="h-40 bg-white/60 rounded-lg flex items-center justify-center">
                      <BarChart4 size={48} className="text-blue-accent/40" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 p-3 rounded-lg">
                      <h4 className="font-medium text-sm text-dark-text mb-1">Today's Avg</h4>
                      <p className="text-2xl font-semibold text-blue-accent">124 <span className="text-xs font-normal">mg/dL</span></p>
                    </div>
                    <div className="bg-white/60 p-3 rounded-lg">
                      <h4 className="font-medium text-sm text-dark-text mb-1">7-Day Avg</h4>
                      <p className="text-2xl font-semibold text-blue-accent">118 <span className="text-xs font-normal">mg/dL</span></p>
                    </div>
                  </div>
                </BlurContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-light-blue/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-accent/10 text-blue-accent rounded-full text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-medium-text">
              Discover how Diabetes Care has helped people take control of their health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Diabetes Care has completely changed how I manage my diabetes. The insights are invaluable.",
                name: "Sarah Johnson",
                title: "Living with Type 1 Diabetes",
                icon: <Heart className="text-red-400" />
              },
              {
                quote: "As a doctor, I recommend Diabetes Care to all my patients. It makes our consultations so much more productive.",
                name: "Dr. Michael Chen",
                title: "Endocrinologist",
                icon: <Medal className="text-amber-400" />
              },
              {
                quote: "The reminders and alerts have helped me stay consistent with checking my blood sugar levels.",
                name: "Robert Garcia",
                title: "Managing Type 2 Diabetes",
                icon: <CheckCircle2 className="text-green-400" />
              }
            ].map((testimonial, index) => (
              <BlurContainer key={index} className="p-6 flex flex-col h-full animate-fade-up">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    {testimonial.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="italic text-medium-text mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-medium-text">{testimonial.title}</p>
                </div>
              </BlurContainer>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
              Take Control of Your Glucose Management Today
            </h2>
            <p className="text-lg text-medium-text mb-8">
              Join thousands of users who are already benefiting from our comprehensive, 
              user-friendly glucose tracking platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/login">Get Started Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="mailto:support@diabetescare.com">Contact Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
