"use client";

import Link from "next/link";
import {
  X,
  Home,
  Map,
  User,
  Settings,
  BookOpen,
  Calendar,
  GraduationCap,
  Building,
  Feather,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const links = [
    {
      name: "Home",
      href: "/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Features",
      href: "/dashboard/features",
      icon: <Feather className="w-5 h-5" />,
    },

    {
      name: "3D Campus",
      href: "/dashboard/3d-campus",
      icon: <Map className="w-5 h-5" />,
    },

    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: <User className="w-5 h-5" />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex md:flex-col
          z-50
        `}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-gray-300" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-100">
                RC Explore
              </h1>
              <p className="text-xs text-gray-400">Academic Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-800 md:hidden"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-gray-800 hover:text-white group"
              onClick={onClose}
            >
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {link.icon}
              </span>
              <span className="text-sm font-medium text-gray-300">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
