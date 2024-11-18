import ChatTab from "../../../../Components/Partials/ChatTab";

function Groups(){
    return(
      <div className="relative h-screen flex mt-6">
      {/* مكان ثابت للـ ChatTab */}
      <div className=" flex-grow-0  fixed basis-1/2 z-10   ">
      
        <ChatTab />
      </div>

      <div className="flex-grow  ml-[50px]  p-4">
      محتوى الصفحة المجموعات 
        
      </div>
    </div>
    );
   }
   
   export default Groups;