import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700 sticky top-16">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick("Profile")}
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "Profile"
                ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
          >
            Chat
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick("Dashboard")}
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "Dashboard"
                ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
          >
            Status
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleTabClick("Settings")}
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === "Settings"
                ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }`}
          >
            Moment  
          </a>
        </li>
        
        
      </ul>
    </div>
  );
};

export default Navbar;
