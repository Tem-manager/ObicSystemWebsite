
import PageContent from "./PageContent";
import Header from "../Components/Partials/Header";
import Navbar from "../Components/Partials/Navbar";
import { MoreVert as MoreVertIcon, Search as SearchIcon } from "@mui/icons-material";

function ChatLayout() {
  return (
    <div className="flex-grow ml-[4vw]">

<Header
      leftContent={ <div className="text-[#192745] text-xl font-semibold">OBIC</div>}
      rightContent={
        <>
          {/* Search icon */}
          <button type="button">
            <SearchIcon fontSize="large" />
          </button>

          {/* Three-dot menu button */}
          <button type="button">
            <MoreVertIcon fontSize="large" />
          </button>
        </>
      }
    />
    
      <Navbar />
      
      <PageContent />
        

    </div>
  );
}

export default ChatLayout;
