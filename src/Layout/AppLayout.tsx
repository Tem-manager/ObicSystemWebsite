import SideBar from "../Components/Partials/SideBar";
import { COLORS } from "../constants/thems/Color";
import PageContent from "./PageContent";

function AppLayout() {
  return (

    <div className="flex min-h-screen "
    style={{ backgroundColor: COLORS.BACKGROUND }}
>
      

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
