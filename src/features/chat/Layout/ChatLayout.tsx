
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
import { BiUserPlus } from "react-icons/bi";
import DropdownMenu from "../Components/Ui/DropdownMenu";
function ChatLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownOptions = [
    {
      label: "New Chat",
      icon: <Chat fontSize="small" />,
      onClick: () => alert("New Chat clicked"),
    },
    {
      label: "Add Contact",
      icon: <BiUserPlus fontSize="large" />,
      onClick: () => alert("Add Contact clicked"),
    },
    {
      label: "New Group",
      icon: <GroupAdd fontSize="small" />,
      onClick: () => alert("New Group clicked"),
    },
    {
      label: "Scan",
      icon: <QrCode fontSize="small" />,
      onClick: () => alert("Scan clicked"),
    },
    {
      label: "Money",
      icon: <SearchIcon fontSize="small" />,
      onClick: () => alert("Money clicked"),
    },
  ];

  return (
    <div className="flex-grow ml-[4vw]" onClick={() => setIsDropdownOpen(false)}>
      <Header
        leftContent={<div className="text-[#192745] text-xl font-semibold">OBIC</div>}
        rightContent={
          <>
            <button type="button">
              <SearchIcon fontSize="large" />
            </button>

            <div className="relative inline-block">
             
            <DropdownMenu
                buttonContent={<MoreVertIcon fontSize="large" />}
                options={dropdownOptions}
              />
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
