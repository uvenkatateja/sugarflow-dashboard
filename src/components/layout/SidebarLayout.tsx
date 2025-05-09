
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { Home, Activity, Users, FileText, LogOut, BarChart4 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import BlurContainer from '../ui/BlurContainer';
import { toast } from '@/components/ui/use-toast';

const SidebarLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only show sidebar on dashboard routes
  const isDashboardRoute = ['/dashboard', '/patients', '/reports'].includes(location.pathname);

  if (!isDashboardRoute) return <Outlet />;

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account"
    });
    navigate('/');
  };

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen w-full bg-background pt-0">
        <AppSidebar onLogout={handleLogout} />
        <main className="flex-1 overflow-x-hidden">
          <div className="container mx-auto p-4 pt-8">
            <div className="flex items-center mb-6">
              <SidebarTrigger className="mr-4 md:hidden" />
              <h1 className="text-2xl font-semibold text-dark-text">
                {location.pathname === '/dashboard' && 'Dashboard'}
                {location.pathname === '/patients' && 'Patients'}
                {location.pathname === '/reports' && 'Reports'}
              </h1>
            </div>
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

const AppSidebar = ({ onLogout }: { onLogout: () => void }) => {
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', path: '/dashboard', icon: Home },
    { title: 'Patients', path: '/patients', icon: Users },
    { title: 'Reports', path: '/reports', icon: FileText },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-3">
        <div className="flex items-center gap-2 px-2">
          <div className="h-9 w-9 rounded-full bg-blue-accent flex items-center justify-center">
            <span className="text-white font-semibold">DC</span>
          </div>
          <span className="font-semibold text-lg text-dark-text">
            Diabetes Care
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild 
                  isActive={location.pathname === item.path}
                  tooltip={item.title}
                >
                  <Link to={item.path}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Health</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Glucose Logs">
                <Activity />
                <span>Glucose Logs</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Analytics">
                <BarChart4 />
                <span>Analytics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <BlurContainer className="p-2">
          <button 
            onClick={onLogout}
            className="flex w-full items-center gap-2 px-2 py-1 rounded-md hover:bg-blue-50 transition-colors"
          >
            <LogOut size={18} className="text-medium-text" />
            <span className="text-medium-text">Logout</span>
          </button>
        </BlurContainer>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarLayout;
