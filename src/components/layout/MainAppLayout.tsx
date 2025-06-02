import React from 'react';
import SidebarNav from './SidebarNav';
import TopHeader from './TopHeader';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className={cn(
        "grid grid-cols-[250px_1fr] grid-rows-[80px_1fr] h-screen",
        "antialiased text-foreground bg-background"
      )}>
      <div className="row-span-2 col-start-1 col-end-2 row-start-1 row-end-3 bg-sidebar border-r border-sidebar-border">
        <SidebarNav />
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 bg-background border-b border-border">
        <TopHeader />
      </div>
      <main className="col-start-2 col-end-3 row-start-2 row-end-3 overflow-y-auto p-6 bg-muted/40">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
