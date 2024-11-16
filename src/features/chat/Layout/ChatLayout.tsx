// import Header from "../Components/Partials/Header";
// import PageContent from "./PageContent";

// function ChatLayout() {
//   return (
    
//     <div className="flex flex-col min-h-screen">
//       {/* ===== Header Start ===== */}
//       <div className="fixed  top-0  w-full ">
//         <Header/>

//       {/* <div className="w-full bg-gray-800 fixed top-0 left-0 z-50">
//       {/* ===== Header End ===== */}
//       </div> 

//       {/* <div className="flex flex-1"> */}
        
//         {/* ===== Main Content Area Start ===== */}
//         <div className="flex flex-1 pt-[65px]">
//         <main className="w-full "> 
//             <PageContent />
//           </main> 
//         </div>
//         {/* ===== Main Content Area End ===== */}
//       </div>
//     // </div>
//   );
// }

// export default ChatLayout;

import PageContent from "./PageContent";
import Header from "../Components/Partials/Header";

function ChatLayout() {
  return (
    <div className="flex flex-col min-h-screen  ">


      {/* ===== Header Start ===== */}
      <Header/>
      {/* ===== Header End ===== */}



      {/* ===== Navbar Start ===== */}
      {/* <Tabs/> */}
      {/* ===== Navbar End ===== */}



      {/* ===== Main Content Area Start ===== */}
      <div className="flex flex-1 pt-[20px]">
        <main className="w-full">
          <PageContent />
        </main>
      </div>
      {/* ===== Main Content Area End ===== */}



    </div>
  );
}

export default ChatLayout;
