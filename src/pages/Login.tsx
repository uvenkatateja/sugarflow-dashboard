
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlurContainer from '@/components/ui/BlurContainer';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDemoLogin = () => {
    setIsLoading(true);
    
    // Simulate a loading state
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
      
      // Show welcome toast
      toast.success('Welcome to the Diabetes Manager demo!', {
        description: 'Explore the dashboard to view patient data and insights.',
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-light-blue/30 to-transparent">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[600px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto animate-scale-in">
        <div className="mb-8 text-center">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-blue-accent flex items-center justify-center">
              <span className="text-white font-semibold">DM</span>
            </div>
          </div>
          <h1 className="mt-6 text-2xl font-bold text-dark-text">Welcome to DiabetesManager</h1>
          <p className="mt-2 text-medium-text">Sign in to access your dashboard</p>
        </div>
        
        <BlurContainer className="p-6">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleDemoLogin();
            }}
            className="space-y-5"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-dark-text">
                Email
              </label>
              <Input 
                id="email"
                type="email" 
                placeholder="demo@diabetesmanager.com" 
                autoComplete="email" 
                className="h-11"
                required
                defaultValue="demo@diabetesmanager.com"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-dark-text">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-accent hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                autoComplete="current-password"
                className="h-11"
                required
                defaultValue="demopassword"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 rounded border-gray-300 text-blue-accent focus:ring-blue-accent"
                defaultChecked
              />
              <label htmlFor="remember" className="text-sm text-medium-text">
                Remember me
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-11"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-light-text">Or use demo account</span>
              </div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full h-11"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              Demo Login
            </Button>
          </form>
        </BlurContainer>
        
        <p className="mt-6 text-center text-sm text-light-text">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-blue-accent hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
