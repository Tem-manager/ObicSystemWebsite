  import ChatTab from "../../../../Components/Partials/ChatTab";
import conversation from "../all-chats/conversation/Conversation";

  function Favorites() {
   
  
    return (
     <>
      <ChatTab />

      <div className="flex-grow ml-[10px]   flex   ">

      <conversation/>
      <div className="w-[70%] bg-gray-200">

      </div>
      </div>
      </> 
     );
  }
  
 
  export default Favorites;
  