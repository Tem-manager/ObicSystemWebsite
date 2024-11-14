import { Link, useLocation } from 'react-router-dom';

import {  
   Home as HomeIcon,
   CategoryOutlined as ServiceIcon,   
   BusinessOutlined as MinistryIcon, 
   PlayCircleOutline as VideoIcon , 
   PermIdentityOutlined as User,
   AccountBalanceWalletOutlined as Wallet
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
          { to: "/chat", icon: <HomeIcon fontSize="large" />, label: "Home" }, 
          { to: "/services", icon: <ServiceIcon fontSize="large" />, label: "Services" },
          { to: "/ministries", icon: <MinistryIcon fontSize="large" />, label: "Ministries" }, 
          { to: "/enjoy", icon: <VideoIcon fontSize="large" />, label: "Enjoy" }, 
          { to: "/wallet", icon: <Wallet fontSize="large" />, label: "Wallet" }, 
          { to: "/login", icon: <User fontSize="large" />, label: "Login" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`group flex flex-col items-center justify-center w-14 h-20 rounded-md
              ${isActive(item.to) ? 'text-white' : 'text-gray-600 hover:text-white'}
              transition-all duration-300 ease-in-out`}
          > 
            {/* Icon */}
            {React.cloneElement(item.icon, { 
              className: `${isActive(item.to) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`  
            })}

            {/* Label */}
            <span
              className={`mt-2 text-xs
                ${isActive(item.to) ? 'text-white' : 'text-gray-400 group-hover:text-white '}
                transition-all duration-300 ease-in-out`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
