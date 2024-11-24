import ChatTab from "../../../../Components/Partials/ChatTab";
import ChatList from "./ChatList";

function AllChats() {

  
  return (
    <>
        <ChatTab />

      <div className="flex-grow ml-[10px]  w-full  flex  ">
{/* 
      <div className="w-[38%] bg-gray-200 p-4 m-2"    
       style={{ backgroundColor: COLORS.BACKGROUND }}
      >
      <h2 className="text-xl font-semibold mb-4">All Chats</h2>

<div className="space-y-4">
  <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
    <img
      src="https://via.placeholder.com/50"
      alt="User"
      className="w-12 h-12 rounded-full mr-3"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-lg">John Doe</h3>
      <p className="text-sm text-gray-500 line-clamp-1">Hey! How are you? Let's catch up soon.</p>
    </div>
    <div className="text-center">
      <span className="text-xs text-gray-400 block">10:30</span>
      <span className="bg-blue-400 text-white text-xs rounded-full px-2 py-1 mt-1 inline-block">3</span>
    </div>
  </div>

  <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
    <img
      src="https://via.placeholder.com/50"
      alt="User"
      className="w-12 h-12 rounded-full mr-3"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-lg">Jane Smith</h3>
      <p className="text-sm text-gray-500 line-clamp-1">Are you coming to the party?</p>
    </div>
    <div className="text-center">
      <span className="text-xs text-gray-400 block">Yesterday</span>
    </div>
  </div>

  <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
    <img
      src="https://via.placeholder.com/50"
      alt="Group"
      className="w-12 h-12 rounded-full mr-3"
    />
    <div className="flex-1">
      <h3 className="font-semibold text-lg">Work Group</h3>
      <p className="text-sm text-gray-500 line-clamp-1">Please check the new project details, it's important.</p>
    </div>
    <div className="text-center">
      <span className="text-xs text-gray-400 block">11:15</span>
    </div>
  </div>

</div>
      </div> */}
      <ChatList/>
      <div className="w-[65%] bg-gray-200 p-4 m-2">

      </div>
      </div>
      </>
  );
}


  

  




export default AllChats;
