// import { Route, Routes } from 'react-router-dom';
// import ChatHome from '../pages/ChatHome';
// import ChatPage1 from '../pages/ChatPage1';
// import ChatPage2 from '../pages/ChatPage2';

// const ChatRoutes = () => (
//   <Routes>
//     {/* الصفحة الرئيسية للسوق */}
//     <Route path="/" element={<ChatHome />} />
//     <Route path="/page1" element={<ChatPage1 />} />
//     <Route path="/page2" element={<ChatPage2 />} />
//   </Routes>
// );

// export default ChatRoutes;




import { lazy } from "react";


const AllChats = lazy(() =>
  import("../pages/protected/chats/all-chats/AllChats")
);


const Groups = lazy(() =>
  import("../pages/protected/chats/groups/Groups")
);

const Favorites = lazy(() =>
  import("../pages/protected/chats/favorites/Favorites")
);

const Calls = lazy(() =>
  import("../pages/protected/chats/calls/Calls")
);


const Moments = lazy(() =>
  import("../pages/protected/moments/Moments")
);

const Status = lazy(() =>
  import("../pages/protected/status/Status")
);

const statusText = lazy(() =>
  import("../pages/protected/status/statusText")
);

const routes = [
  {
    path: "/chats",
    title: " chat | All chat ",
    component: AllChats,
  },
  {
    path: "/Groups",
    title: "Chat | Groups  ",
    component: Groups,
  },
  {
    path: "/Favorites",
    title: "Chat | Favorites  ",
    component: Favorites,
  }, {
    path: "/Calls",
    title: "Chat | Calls  ",
    component: Calls,
  },
  {
    path: "/moments",
    title: "Chat | Moments  ",
    component: Moments,
  },
  {
    path: "/status",
    title: "Chat | Status  ",
    component: Status,
  },
  {
    path: "/statusText",
    title: "Chat | statusText  ",
    component: statusText,
  },
]
export default routes;