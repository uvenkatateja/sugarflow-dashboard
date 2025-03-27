
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-100 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-accent flex items-center justify-center">
                <span className="text-white font-semibold text-sm">DM</span>
              </div>
              <span className="font-semibold text-dark-text">DiabetesManager</span>
            </div>
            <p className="mt-2 text-sm text-light-text max-w-md">
              Empowering patients and healthcare providers with intuitive diabetes management tools.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <h4 className="font-medium text-dark-text mb-3">Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-light-text hover:text-blue-accent text-sm transition-colors">Home</Link></li>
                <li><Link to="/login" className="text-light-text hover:text-blue-accent text-sm transition-colors">Login</Link></li>
                <li><Link to="/dashboard" className="text-light-text hover:text-blue-accent text-sm transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-dark-text mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-light-text hover:text-blue-accent text-sm transition-colors">Help Center</a></li>
                <li><a href="#" className="text-light-text hover:text-blue-accent text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-light-text hover:text-blue-accent text-sm transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-dark-text mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:support@diabetesmanager.com" className="text-light-text hover:text-blue-accent text-sm transition-colors">support@diabetesmanager.com</a></li>
                <li><span className="text-light-text text-sm">123 Health Street, Medical City</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-5 border-t border-slate-100 text-center text-sm text-light-text">
          <p>© {currentYear} DiabetesManager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
