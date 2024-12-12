import { Link, useLocation } from "react-router-dom";
import {
  Home as HomeIcon,
  CategoryOutlined as ServiceIcon,
  BusinessOutlined as MinistryIcon,
  PlayCircleOutline as VideoIcon,
  PermIdentityOutlined as UserIcon,
  AccountBalanceWalletOutlined as WalletIcon,
  LogoutOutlined as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import React, { useState } from "react";

interface NavItem {
  to: string;
  icon: JSX.Element;
  label: string;
}

const TopBar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to determine if the link should be active
  const isActive = (path: string): boolean => location.pathname.startsWith(path);

  const navItems: NavItem[] = [
    { to: "/chat/chats", icon: <HomeIcon fontSize="small" />, label: "Home" },
    { to: "/services", icon: <ServiceIcon fontSize="small" />, label: "Services" },
    { to: "/ministries", icon: <MinistryIcon fontSize="small" />, label: "Ministries" },
    { to: "/enjoy", icon: <VideoIcon fontSize="small" />, label: "Enjoy" },
    { to: "/wallet", icon: <WalletIcon fontSize="small" />, label: "Wallet" },
  ];

  return (
    <div className="w-full h-16 flex items-center px-8 fixed top-0 z-10 border-b border-gray-200 bg-[#192745] z-index">
  {/* Left Section: Mobile Menu Toggle Icon and OBIC Title */}
  <div className="flex items-center space-x-3">
    {/* Icon: Only visible on small screens */}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-white hover:text-gray-300 md:hidden"
    >
      <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>

    {/* OBIC Title */}
    <div className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
      OBIC
    </div>
  </div>

  {/* Center Section: Navigation Links */}
  <div className="flex-grow flex justify-center md:justify-start hidden md:flex ml-8">
  {navItems.map((item, index) => (

    
   <Link
  key={index}
  to={item.to}
  className={`group flex items-center space-x-2 px-2 py-1 rounded-lg relative  
    ${isActive(item.to) ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"}`}
>
  {/* Icon */}
  {React.cloneElement(item.icon, {
    className: `${
      isActive(item.to)
        ? "text-white"
        : "text-gray-400 group-hover:text-gray-300"
    } w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-all duration-200 ease-in-out`})}
  {/* Label */}
  <span
    className={`text-xs font-medium 
      ${isActive(item.to) ? "text-white" : "text-gray-400 group-hover:text-gray-300"}`}
  >
    {item.label}
  </span>

  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
</Link>

  ))}
</div>


  {/* Right Section: Profile and Logout Icons */}
  <div className="ml-auto flex items-center space-x-4">
    {/* Profile Icon */}
    <Link to="/profile">
      <UserIcon className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
    </Link>

    {/* Logout Icon */}
    <Link to="/">
      <LogoutIcon className="text-white hover:text-gray-300 transition-all duration-300 ease-in-out cursor-pointer w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
    </Link>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="absolute top-16 left-0 w-full shadow-lg bg-[#192745] md:hidden flex justify-between items-center px-4 py-2">
      {navItems.map((item, index) => (
        
        <Link
  key={index}
  to={item.to}
  onClick={() => setIsMenuOpen(false)} // اغلاق القائمة بعد الضغط
  className={`group flex flex-col items-center space-y-1 px-4 py-2   
    ${isActive(item.to) ? "text-white" : "text-gray-400 hover:text-gray-300"}`}
>
  {/* أيقونة */}
  {React.cloneElement(item.icon, {
    className: `${
      isActive(item.to)
        ? "text-white"
        : "text-gray-400 group-hover:text-gray-300"
    } w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-all duration-200 ease-in-out`,
  })}
  {/* تسمية */}
  <span
    className={`text-xs font-medium 
      ${isActive(item.to) ? "text-white" : "text-gray-400 group-hover:text-gray-300"}`}
  >
    {item.label}
  </span>

  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></div>
</Link>

      
      
      ))}
    </div>
  )}
</div>

  );
};

export default TopBar;
