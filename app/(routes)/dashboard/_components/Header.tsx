"use client";

import { useUser } from "@clerk/nextjs";
import { Bell, User, Menu } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return null;

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-4 md:px-6">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
        onClick={onMenuClick}
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>

      <h2 className="text-lg font-semibold text-center">Dashboard</h2>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* User Avatar */}
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
