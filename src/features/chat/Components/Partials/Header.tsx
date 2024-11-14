import { MoreVert as MoreVertIcon, Search as SearchIcon } from '@mui/icons-material';

function Header() {
  return (
    <header className="top-0 sticky w-full z-999 flex items-center justify-center">
      <div className="flex py-0 w-[98%] bg-white p-4 mt-2 items-center h-[65px] rounded-xl shadow-md justify-between">
        
        {/* Left section - OBIC text */}
        <div className="text-[#192745] text-xl font-semibold">
          OBIC
        </div>

        {/* Right section - Search icon and Three-dot menu button */}
        <div className="flex items-center space-x-4 text-[#192745]">
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
    </header>
  );
}

export default Header;
  