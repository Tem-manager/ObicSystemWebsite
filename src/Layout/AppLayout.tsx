import SideBar from "../Components/Partials/SideBar";
import PageContent from "./PageContent";

function AppLayout() {
  return (

    <div className="flex min-h-screen">

      <aside className="">
        <SideBar />
      </aside>
      

       
      <main className="flex-grow">
      <PageContent />
        </main>
        
      </div>
  );
}

export default AppLayout;
