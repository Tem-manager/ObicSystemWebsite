import { Route, Routes } from 'react-router-dom';
import ChatHome from '../pages/ChatHome';
import ChatPage1 from '../pages/ChatPage1';
import ChatPage2 from '../pages/ChatPage2';

const ChatRoutes = () => (
  <Routes>
    {/* الصفحة الرئيسية للسوق */}
    <Route path="/" element={<ChatHome />} />
    <Route path="/page1" element={<ChatPage1 />} />
    <Route path="/page2" element={<ChatPage2 />} />
  </Routes>
);

export default ChatRoutes;
