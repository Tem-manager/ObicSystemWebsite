





// import { MoreVert as MoreVertIcon, Search as SearchIcon } from "@mui/icons-material";

// function Header() {
//   return (
//     <div className="h-[10vh]  flex items-center justify-between ">
//       <div className="w-full pr-10 py-2  box-border pl-4 ">
//         <div className="flex items-center justify-between h-[45px]">
//           {/* Left section - OBIC text */}
//           <div className="text-[#192745] text-xl font-semibold">OBIC</div>

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




function Header({ leftContent, centerContent, rightContent, className }) {
  return (
    <header className={`h-[10vh] flex items-center justify-between w-full ${className || ""}`}>
      <div className="w-full pr-10 py-2 box-border pl-4">
        <div className="flex items-center justify-between h-[45px]">
          {/* المحتوى الأيسر */}
          <div>{leftContent}</div>

          {/* المحتوى الأوسط */}
          <div>{centerContent}</div>

          {/* المحتوى الأيمن */}
          <div className="flex items-center space-x-8">{rightContent}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;