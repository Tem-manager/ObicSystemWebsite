// import { MoreVert as MoreVertIcon, Search as SearchIcon } from '@mui/icons-material';

// function Header() {
//   return (
//     <div className="top-4 sticky w-full z-50   ">
//       <div className="w-full bg-white px-4 py-2 shadow-md rounded-xl shadow-md ">
//         <div className="flex items-center justify-between h-[45px] ">
//           {/* Left section - OBIC text */}
//           <div className="text-[#192745] text-xl font-semibold">
//             OBIC
//           </div>

//           {/* Right section - Search icon and Three-dot menu button */}
//           <div className="flex items-center space-x-8 text-[#192745]">
//             {/* Search icon */}
//             <button type="button">
//               <SearchIcon fontSize="large" />
//             </button>

//             {/* Three-dot menu button */}
//             <button type="button">
//               <MoreVertIcon fontSize="large" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;





import { MoreVert as MoreVertIcon, Search as SearchIcon } from "@mui/icons-material";

function Header() {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="w-full bg-white pr-20 py-2 border-b border-gray-200box-border pl-4">
        <div className="flex items-center justify-between h-[45px]">
          {/* Left section - OBIC text */}
          <div className="text-[#192745] text-xl font-semibold">OBIC</div>

          {/* Right section - Search icon and Three-dot menu button */}
          <div className="flex items-center space-x-8 text-[#192745]">
            {/* Search icon */}
            <button type="button">
              <SearchIcon fontSize="large" />
            </button>

            {/* Three-dot menu button */}
            <button type="button">
              <MoreVertIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
