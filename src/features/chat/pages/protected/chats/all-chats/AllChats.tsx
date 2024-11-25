import ChatTab from "../../../../Components/Partials/ChatTab";
import ChatList from "./ChatList";

function AllChats() {

  
  return (
    <>
        <ChatTab />

      <div className="flex-grow ml-[10px] flex  ">
      <ChatList/>
      <div className="w-[70%] bg-gray-200">

      </div>
      </div>
      </>
  );
}


  

  




export default AllChats;
