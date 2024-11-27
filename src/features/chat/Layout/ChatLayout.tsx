
// import PageContent from "./PageContent";
// import Header from "../Components/Partials/Header";
// import Navbar from "../Components/Partials/Navbar";
// import { MoreVert as MoreVertIcon, Search as SearchIcon } from "@mui/icons-material";

// function ChatLayout() {
//   return (
//     <div className="flex-grow ml-[4vw]">

// <Header
//       leftContent={ <div className="text-[#192745] text-xl font-semibold">OBIC</div>}
//       rightContent={
//         <>
//           {/* Search icon */}
//           <button type="button">
//             <SearchIcon fontSize="large" />
//           </button>

//           {/* Three-dot menu button */}
//           <button type="button">
//             <MoreVertIcon fontSize="large" />
//           </button>
//         </>
//       }
//     />
    
//       <Navbar />
      
//       <PageContent />
        

//     </div>
//   );
// }

// export default ChatLayout;
import { useState } from "react";
import PageContent from "./PageContent";
import Header from "../Components/Partials/Header";
import Navbar from "../Components/Partials/Navbar";
import { Chat, GroupAdd, MoreVert as MoreVertIcon, QrCode, Search as SearchIcon } from "@mui/icons-material";
import { Home as HomeIcon } from "@mui/icons-material"; // استيراد أيقونة إضافية
import { BiUserPlus } from "react-icons/bi";

function ChatLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex-grow ml-[4vw]" onClick={closeDropdown}>
      <Header
        leftContent={<div className="text-[#192745] text-xl font-semibold">OBIC</div>}
        rightContent={
          <>
            {/* Search icon */}
            <button type="button">
              <SearchIcon fontSize="large" />
            </button>

            {/* Three-dot menu button */}
            <div className="relative inline-block">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // منع إغلاق القائمة عند النقر داخلها
                  toggleDropdown();
                }}
              >
                <MoreVertIcon fontSize="large" />
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  onClick={(e) => e.stopPropagation()} // منع إغلاق القائمة عند النقر داخلها
                >
                  <ul className="py-2">
  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
    <Chat className="mr-2 " fontSize="small" />
New Chat
  </li>
  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
    <BiUserPlus className="mr-2 " fontSize="large" />
    Add Contact
  </li>
  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
    <GroupAdd className="mr-2 " fontSize="small" />
    New Group 
  </li>
  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
    <QrCode className="mr-2 " fontSize="small" />
    Scan
  </li>
  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
    <SearchIcon className="mr-2 " fontSize="small" />
    Money
  </li>
</ul>

                </div>
              )}
            </div>
          </>
        }
      />

      <Navbar />
      <PageContent />
    </div>
  );
}

export default ChatLayout;
