import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './Components/Partials/SideBar';
import MarketRoutes from './features/market/route/MarketRoutes';
import MinistriesRoutes from './features/ministries/route/MinistriesRoutes';
import Page404 from './pages/Page404';
import SharedRoutes from './route/SharedRoutes';
import EnjoyRoutes from './features/enjoy/route/EnjoyRoutes';
import ServicesRoutes from './features/services/route/ServicesRoutes';
import WalletRoutes from './features/wallet/route/WalletRoutes';
import ChatRoutes from './features/chat/route/ChatRoutes';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <div className="flex">
      <SideBar /> {/* Sidebar appears by default */}
      <div className="flex-grow">
        <Routes>
          
          <Route path="/*" element={<SharedRoutes />} />

          <Route path="/chat/*" element={<ChatRoutes />} />
          <Route path="/" element={<Navigate to="/chat" replace />} />
          <Route path="/services/*" element={<ServicesRoutes />} />
          <Route path="/ministries/*" element={<MinistriesRoutes />} />
          <Route path="/enjoy/*" element={<EnjoyRoutes />} />
          <Route path="/wallet/*" element={<WalletRoutes />} />
          <Route path="*" element={<Page404 />} />   
       
        </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;
