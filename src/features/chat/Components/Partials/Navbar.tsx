import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  // Helper function to determine if the link should be active
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  // Links data
  const tabs = [
    { to: "/chat/chats", label: "Chat" },
    { to: "/chat/status", label: "Status" },
    { to: "/chat/moments", label: "Moments" },
  ];

  return (
    <div className="h-[8vh] flex items-center justify-center w-full  shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.06)] relative">

    <div className="text-sm  font-medium text-center text-gray-500  ">
      <ul className="flex justify-center items-center mb-px">
        {tabs.map((tab, index) => (
          <li key={index} className="mx-2">
            <Link
              to={tab.to}
              className={`inline-block p-4 border-b-2 rounded-t-lg transition-all duration-300 ${
                isActive(tab.to)
                  ? "text-blue-600 border-blue-600 dark:text-[#192745] dark:border-[#192745]"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-500"
              }`}
            >
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
