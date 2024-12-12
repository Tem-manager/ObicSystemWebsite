import TopBar from "../Components/Partials/TopBar";
import { COLORS } from "../constants/thems/Color";
import routes from "../route/AppRoutes";
import PageContent from "./PageContent";

function AppLayout() {
  return (

    <div className="flex min-h-screen  "

    style={{ backgroundColor: COLORS.BACKGROUND }}
>      
      <aside className=" ">
        <TopBar/>
      </aside>
      

       
      <main className="flex-grow pt-16  ">
      <PageContent routes={routes} />
      </main>
        
      </div>
  );
}

export default AppLayout;
