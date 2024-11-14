
import { Link, useLocation } from 'react-router-dom';

import {  
   Home as HomeIcon,
   CategoryOutlined as ServiceIcon,   
   BusinessOutlined as MinistryIcon, 
   PlayCircleOutline as VideoIcon , 
   PermIdentityOutlined as User,
   AccountBalanceWalletOutlined as  Wallet
  } from '@mui/icons-material';
  
import React from 'react';



const SideBar = () => {
  const location = useLocation();

  // Helper function to determine if the link should be active
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="bg-[#192745] h-screen w-20 flex flex-col items-center py-8 shadow-lg">
      {/* Navigation Links */}
      <div className="flex flex-col items-center w-full space-y-10">
        {[ 
          { to: "/chat", icon: <HomeIcon fontSize="large" /> }, 
          { to: "/services", icon: <ServiceIcon fontSize="large" /> },
          { to: "/ministries", icon: <MinistryIcon fontSize="large" /> }, 
          { to: "/enjoy", icon: <VideoIcon fontSize="large" /> }, 
          { to: "/wallet", icon: <Wallet fontSize="large" /> }, 
          // { to: "/login", icon: <Login fontSize="large" /> },
          { to: "/login", icon: <User fontSize="large" /> },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`group flex items-center justify-center w-14 h-14 rounded-md text-gray-300 
              ${isActive(item.to) ? 'text-[#192745] bg-gray-300' : 'hover:text-white hover:bg-gray-300'}
              transition-all duration-300 ease-in-out`}
          > 
            {React.cloneElement(item.icon, { 
              className: `${isActive(item.to) ? 'text-[#192745]' : 'text-gray-300'} 
              group-hover:text-[#192745]`
            })}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
