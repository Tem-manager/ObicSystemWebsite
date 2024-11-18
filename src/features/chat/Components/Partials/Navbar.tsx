// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const location = useLocation();

//   // Helper function to determine if the link should be active
//   const isActive = (path: string) => location.pathname === path;

//   // Links data
//   const tabs = [
//     { to: "/chat", label: "Chat" },
//     { to: "/chat/status", label: "Status" },
//     { to: "/chat/moments", label: "Moments" },
//   ];

//   return (
//     <div className="text-sm font-medium text-center text-gray-500 sticky top-14">
//       <ul className="flex flex-wrap mb-px">
//         {tabs.map((tab, index) => (
//           <li key={index} className="me-2">
//             <Link
//               to={tab.to}
//               className={`inline-block p-4 border-b-2 rounded-t-lg ${
//                 isActive(tab.to)
//                   ? "text-blue-600 border-blue-600 dark:text-[#192745] dark:border-[#192745]"
//                   : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-500"
//               }`}
//             >
//               {tab.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;



import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  // Helper function to determine if the link should be active
  const isActive = (path: string) => location.pathname === path;

  // Links data
  const tabs = [
    { to: "/chat", label: "Chat" },
    { to: "/chat/status", label: "Status" },
    { to: "/chat/moments", label: "Moments" },
  ];

  return (
    <div className="text-sm font-medium text-center text-gray-500 sticky top-14 z-10 bg-white shadow-sm">
      <ul className="flex flex-wrap mb-px">
        {tabs.map((tab, index) => (
          <li key={index} className="me-2">
            <Link
              to={tab.to}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
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
  );
};

export default Navbar;
