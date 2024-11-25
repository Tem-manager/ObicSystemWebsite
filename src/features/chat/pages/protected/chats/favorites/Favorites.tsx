  import ChatTab from "../../../../Components/Partials/ChatTab";
import ChatList from "../all-chats/ChatList";

  function Favorites() {
   
  
    return (
     <>
      <ChatTab />

      <div className="flex-grow ml-[10px]   flex   ">

      <ChatList/>
      <div className="w-[70%] bg-gray-200">

      </div>
      </div>
      </> 
     );
  }
  
 
  export default Favorites;
  