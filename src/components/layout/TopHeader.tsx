import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CalendarDays, Bell, UserCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  // Dummy date data, similar to the image
  const startDate = "06/19/2024";
  const endDate = "06/25/2024";

  return (
    <header
      className={cn(
        'flex items-center justify-between px-6 h-full',
        className
      )}
    >
      <div>
        <h1 className="text-xl font-semibold text-foreground">
          Weekly Status Dashboard
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <CalendarDays className="h-5 w-5" />
          <span>{startDate}</span>
          <span>-</span>
          <span>{endDate}</span>
        </div>
        <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                {/* <AvatarImage src="/avatars/01.png" alt="@username" /> */}
                <AvatarFallback>
                  <UserCircle className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-foreground">Account</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
