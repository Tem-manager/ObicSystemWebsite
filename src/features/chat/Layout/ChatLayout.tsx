
import PageContent from "./PageContent";
import Header from "../Components/Partials/Header";
import Navbar from "../Components/Partials/Navbar";

function ChatLayout() {
  return (
    <div className="flex-grow ml-[4vw]">

      <Header/>
    
      <Navbar />
      
      <PageContent />
        

    </div>
  );
}

export default ChatLayout;
