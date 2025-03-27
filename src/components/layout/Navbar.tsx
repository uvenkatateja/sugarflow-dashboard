import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the dashboard or related pages
  const isDashboardSection = ['/dashboard', '/patients', '/reports'].includes(location.pathname);
  const isLoginPage = location.pathname === '/login';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links to display based on current section
  const links = isDashboardSection 
    ? [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Patients', href: '/patients' },
        { name: 'Reports', href: '/reports' },
      ]
    : [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/#features' },
        { name: 'About', href: '/#about' },
      ];

  // Only show navbar on non-login pages
  if (isLoginPage) return null;

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-blue-accent flex items-center justify-center">
            <span className="text-white font-semibold">DC</span>
          </div>
          <span className={cn(
            "font-semibold text-lg transition-colors",
            isScrolled ? 'text-dark-text' : 'text-dark-text'
          )}>
            Diabetes Care
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-md text-medium-text hover:text-blue-accent transition-colors duration-200",
                location.pathname === link.href && "text-blue-accent font-medium"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {isDashboardSection ? (
            <Link
              to="/"
              className="ml-4 px-4 py-2 rounded-md text-medium-text hover:text-blue-accent transition-colors duration-200"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="ml-4 px-5 py-2 bg-blue-accent hover:bg-blue-accent/90 text-white rounded-md transition-colors duration-200 shadow-sm"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-medium-text focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-fade-down">
          <div className="container py-4 px-6 flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "py-2 text-medium-text",
                  location.pathname === link.href && "text-blue-accent font-medium"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {isDashboardSection ? (
              <Link
                to="/"
                className="py-2 text-medium-text"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="py-2 mt-2 bg-blue-accent hover:bg-blue-accent/90 text-white text-center rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
