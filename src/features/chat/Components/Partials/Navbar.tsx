// components/Tabs.tsx
import React, { useState } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="flex flex-col items-center h-screen w-full">
      {/* شريط التبويبات */}
      <div className="flex justify-center w-full bg-zinc-50 text-neutral-500 shadow-md dark:bg-neutral-700">
        <ul className="list-style-none flex w-full ps-0 lg:justify-center">
          <li className="my-4 lg:my-0 flex-1 text-center">
            <button
              className={`w-full py-2 ${activeTab === "Home" ? "text-[#192745] font-semibold  " : "text-black/60 dark:text-white"}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </button>
          </li>
          <li className="my-4 lg:my-0 flex-1 text-center">
            <button
              className={`w-full py-2 ${activeTab === "Features" ? "text-[#192745] font-semibold " : "text-black/60 dark:text-white/60"}`}
              onClick={() => setActiveTab("Features")}
            >
              Features
            </button>
          </li>
          <li className="my-4 lg:my-0 flex-1 text-center">
            <button
              className={`w-full py-2 ${activeTab === "Pricing" ? "text-[#192745] font-semibold " : "text-black/60 dark:text-white/60"}`}
              onClick={() => setActiveTab("Pricing")}
            >
              Pricing
            </button>
          </li>
        </ul>
      </div>

      {/* محتوى التبويبات */}
      <div className="flex-grow w-full flex justify-center items-center p-4 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
        {activeTab === "Home" && <div>Welcome to the Home tab content!</div>}
        {activeTab === "Features" && <div>Here are some amazing features.</div>}
        {activeTab === "Pricing" && <div>Our pricing plans are simple and transparent.</div>}
      </div>
    </div>
  );
};

export default Tabs;
