
import PageContent from "./PageContent";
import Header from "../Components/Partials/Header";
import Navbar from "../Components/Partials/Navbar";

function ChatLayout() {
  return (
    <div className="flex flex-col min-h-screen  top-0 py-4  ">


      {/* ===== Header Start ===== */}
      <Header/>
      {/* ===== Header End ===== */}



      {/* ===== Navbar Start ===== */}
      <Navbar />
      {/* ===== Navbar End ===== */}



      {/* ===== Main Content Area Start ===== */}

      <div 
        className="flex-1 overflow-y-auto pt-4" 
      >        <main className="w-full">
          <PageContent />
        </main>
      </div>
      {/* ===== Main Content Area End ===== */}



    </div>
  );
}

export default ChatLayout;
