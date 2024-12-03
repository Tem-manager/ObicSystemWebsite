import React, { useState, useEffect, useRef } from "react";
import { Language, MiscellaneousServices, Error, Help, Logout, AccountBalanceWalletOutlined, FilterCenterFocusOutlined, CreditCardOutlined,  MonetizationOnOutlined, CircleNotifications,  SystemSecurityUpdateGood, CheckCircleOutline, HolidayVillageOutlined, AddAlertOutlined, LocalMallOutlined, FolderSpecialOutlined, Fastfood, SelfImprovement, AddShoppingCart, Home } from "@mui/icons-material";
import AccountInfo from "./AccountInfo";
import Example from "./Example";

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [  selectedLanguage,setSelectedLanguage] = useState("العربية");
  const [showLanguages, setShowLanguages] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const [showGoals, setShowGoals] = useState(true);
const [showNotice, setShowNotice] = useState(true);

  const tabs = [
    { key: "services", label: "services", icon: <MiscellaneousServices /> },
    { key: "about", label: "about", icon: <Error /> },
    { key: "help", label: "help", icon: <Help /> },
  ];

  const languages = ["العربية", "English", "Français"];

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setShowLanguages(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 pl-[60px] p-4 bg-gray-100 min-h-screen">
       <AccountInfo/>

      {/* القسم الديناميكي */}
      <div className="lg:w-2/3 w-full bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          {/* التبويبات */}
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition duration-300 ease-in-out ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-md transform scale-105"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-sm"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* اختيار اللغة */}
          <div className="relative" ref={languageMenuRef}>
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              // className="flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-md hover:shadow-sm transition-transform duration-300 ease-in-out hover:scale-105"
            >

              <Language className="h-5 w-5 mr-4" />
              {/* {selectedLanguage} */}
            </button>
            <button
              // className="flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-md hover:shadow-sm transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Logout className="h-5 w-5 mr-4" />
              {/* {selectedLanguage} */}
            </button>

            {showLanguages && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40 z-10">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* المحتوى الديناميكي */}
        <div>
        {activeTab === "services" && (
  <div className="w-full grid grid-cols-1 gap-8">
    {/* الجزء الأول والثاني */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* الحاوية الأولى */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 w-full">
        <div className="text-blue-500">
          <AccountBalanceWalletOutlined className="h-10 w-10" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Wallet</h3>
        </div>
      </div>

      {/* الحاوية الثانية */}
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4 w-full">
        <div className="text-green-500">
          <FilterCenterFocusOutlined className="h-10 w-10" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Money</h3>
        </div>
      </div>
    </div>

    {/* الجزء الثالث والرابع والخامس */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* الحاوية الثالثة */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Financial Tools</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: "Card Repay", icon: CreditCardOutlined },
            { name: "Wealth", icon: MonetizationOnOutlined },
            { name: "Insurance", icon: CircleNotifications },
          ].map((tool) => (
            <div className="text-center" key={tool.name}>
              <div className="bg-blue-100 text-blue-500 rounded-full p-4 shadow-md mx-auto">
                <tool.icon className="h-10 w-10" />
              </div>
              <p className="mt-3 text-gray-700 font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* الحاوية الرابعة */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Daily Services</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Mobile Top Up", icon: SystemSecurityUpdateGood},
            { name: "Utilities", icon: CheckCircleOutline },
            { name: "Public Services", icon: HolidayVillageOutlined },
            { name: "Tencent Charity", icon: AddAlertOutlined },
          ].map((service) => (
            <div className="text-center" key={service.name}>
              <div className="bg-yellow-100 text-yellow-500 rounded-full p-4 shadow-md mx-auto">
                <service.icon className="h-10 w-10" />
              </div>
              <p className="mt-3 text-gray-800 font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* الحاوية الخامسة */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Leisure & Activities</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: "Brand Mall", icon: LocalMallOutlined },
            { name: "Specials ", icon: FolderSpecialOutlined },
            { name: "Food Delivery", icon: Fastfood },
            { name: "Lifestyle & Retail", icon: SelfImprovement },
            { name: "Buy Together ", icon: AddShoppingCart},
            { name: "Housing", icon: Home },
          ].map((activity) => (
            <div className="text-center" key={activity.name}>
              <div className="bg-purple-100 text-purple-500 rounded-full p-4 shadow-md mx-auto">
                <activity.icon className="h-10 w-10" />
              </div>
              <p className="mt-3 text-gray-800 font-medium">{activity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}






{activeTab === "about" && (
  <div className="space-y-6 pt-2 ">
    {/* النص الأصلي */}
    <div className="bg-gray-100 p-6 ">
      The obic application is considered one of the global model
      applications that provide many commercial services and many 
      government facilities, as well as it is considered a means of
      social communication in the world. Through the application, 
      you can exchange cash currencies, so it facilitates all Financial
      operations in the world.
      </div>

    {/* قسم الأهداف (Goals) */}
    <div className={`p-4 ${!showGoals ? 'bg-blue-100' : ''} `}>
                <div className={"flex items-center justify-between"}>
        <h3 className="text-xl font-semibold text-gray-800">Our Goals</h3>
        <button
          onClick={() => setShowGoals((prev) => !prev)}
          className="text-gray-800 focus:outline-none"
        >
          {showGoals ? (
            <span>&#9650; {/* سهم لأعلى */}</span>
          ) : (
            <span>&#9660; {/* سهم لأسفل */}</span>
          )}
        </button>
      </div>

      {showGoals && (
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          <li>Provide high-quality commercial services.</li>
          <li>Ensure customer satisfaction and trust.</li>
          <li>Expand globally with innovative solutions.</li>
          <li>Support small businesses and startups.</li>
          <li>Offer user-friendly and efficient experiences.</li>
        </ul>
      )}
    </div>

    {/* قسم النصائح (Notice) */}
    <div className={`p-4 ${!showNotice ? 'bg-blue-100' : ''} `}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800 ">Notice</h3>
        <button
          onClick={() => setShowNotice((prev) => !prev)}
          className="text-gray-800 focus:outline-none"
        >
          {showNotice ? (
            <span>&#9650; {/* سهم لأعلى */}</span>
          ) : (
            <span>&#9660; {/* سهم لأسفل */}</span>
          )}
        </button>
      </div>

      {showNotice && (
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
          <li>Provide high-quality commercial services.</li>
          <li>Ensure customer satisfaction and trust.</li>
          <li>Expand globally with innovative solutions.</li>
          <li>Support small businesses and startups.</li>
          <li>Offer user-friendly and efficient experiences.</li>
        </ul>
      )}
    </div>

    </div>
)}






          {activeTab === "help" && <div className="pt-10">How can I help you?</div>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile
