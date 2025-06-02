import React from 'react';
import { cn } from '@/lib/utils';
import { LayoutDashboard, BarChart3, FileText, Settings, Package2, UserCircle } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  isUser?: boolean; 
}

const navigationItems: NavItem[] = [
  { href: "#", label: "Dashboard", icon: LayoutDashboard, active: true },
  { href: "#", label: "Analytics", icon: BarChart3 },
  { href: "#", label: "Reports", icon: FileText },
  { href: "#", label: "Settings", icon: Settings },
];

const userNavigationItem: NavItem = {
    href: "#", label: "User Profile", icon: UserCircle, isUser: true
};

const SidebarNav: React.FC = () => {
  return (
    <nav className="flex flex-col h-full text-sidebar-foreground p-4 space-y-2">
      <div className="px-2 py-4 mb-2 flex items-center space-x-2 border-b border-sidebar-border">
        <Package2 className="h-8 w-8 text-sidebar-primary" />
        <h1 className="text-xl font-bold text-sidebar-foreground whitespace-nowrap">
          Status Dashboard
        </h1>
      </div>
      <div className="flex-grow space-y-1">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium',
              'hover:bg-sidebar-primary/10 hover:text-sidebar-accent',
              item.active
                ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                : 'text-sidebar-foreground'
            )}
          >
            <item.icon className={cn('h-5 w-5', item.active ? 'text-sidebar-primary-foreground' : 'text-sidebar-accent')} />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
      <div className="mt-auto pt-2 border-t border-sidebar-border">
        <a
          href={userNavigationItem.href}
          className={cn(
            'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium',
            'hover:bg-sidebar-primary/10 hover:text-sidebar-accent text-sidebar-foreground'
          )}
        >
          <userNavigationItem.icon className='h-5 w-5 text-sidebar-accent' />
          <span>{userNavigationItem.label}</span>
        </a>
      </div>
    </nav>
  );
};

export default SidebarNav;
