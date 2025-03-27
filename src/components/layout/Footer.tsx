
import { Link } from 'react-router-dom';
import { Mail, MapPin, PhoneCall } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-100 py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-accent flex items-center justify-center">
                <span className="text-white font-semibold text-sm">DC</span>
              </div>
              <span className="font-semibold text-xl text-dark-text">Diabetes Care</span>
            </div>
            <p className="text-light-text max-w-md mb-6">
              Empowering patients and healthcare providers with intuitive diabetes management tools.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-soft-gray flex items-center justify-center text-medium-text hover:bg-blue-accent hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-soft-gray flex items-center justify-center text-medium-text hover:bg-blue-accent hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-soft-gray flex items-center justify-center text-medium-text hover:bg-blue-accent hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-soft-gray flex items-center justify-center text-medium-text hover:bg-blue-accent hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-dark-text mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-light-text hover:text-blue-accent transition-colors">Home</Link></li>
              <li><Link to="/#features" className="text-light-text hover:text-blue-accent transition-colors">Features</Link></li>
              <li><Link to="/#about" className="text-light-text hover:text-blue-accent transition-colors">About Us</Link></li>
              <li><Link to="/login" className="text-light-text hover:text-blue-accent transition-colors">Login</Link></li>
              <li><Link to="/dashboard" className="text-light-text hover:text-blue-accent transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-dark-text mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-light-text hover:text-blue-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-light-text hover:text-blue-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-light-text hover:text-blue-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-light-text hover:text-blue-accent transition-colors">Diabetes Education</a></li>
              <li><a href="#" className="text-light-text hover:text-blue-accent transition-colors">Research Articles</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-dark-text mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-blue-accent shrink-0 mt-0.5" />
                <a href="mailto:support@diabetescare.com" className="text-light-text hover:text-blue-accent transition-colors">support@diabetescare.com</a>
              </li>
              <li className="flex items-start">
                <PhoneCall className="mr-3 h-5 w-5 text-blue-accent shrink-0 mt-0.5" />
                <span className="text-light-text">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-accent shrink-0 mt-0.5" />
                <span className="text-light-text">123 Health Street, Medical City, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-text text-sm mb-4 md:mb-0">© {currentYear} Diabetes Care. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-light-text hover:text-blue-accent text-sm transition-colors">Privacy</a>
            <a href="#" className="text-light-text hover:text-blue-accent text-sm transition-colors">Terms</a>
            <a href="#" className="text-light-text hover:text-blue-accent text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
