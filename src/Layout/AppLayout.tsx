import SideBar from "../Components/Partials/SideBar";
import PageContent from "./PageContent";

function AppLayout() {
  return (

      <div className="h-screen w-full flex ">
        
        {/* ===== Sidebar Start ===== */}
      <div className="fixed left-0 top-0 h-full w-10 bg-red-100">
        <SideBar />
      </div>
      
      {/* ===== Sidebar End ===== */}

      {/* ===== Content Area Start ===== */}

      <div className="flex flex-col items-center w-full ml-10  px-4 "> 
       
        {/* ===== Main Content Start ===== */}
        <main className="w-full  ">
        <PageContent />
        </main>
        {/* ===== Main Content End ===== */}
      </div>
      {/* ===== Content Area End ===== */}
        
      </div>
  );
}

export default AppLayout;
