import { Route, Routes } from 'react-router-dom';
import WalletHome from '../pages/WalletHome';
import WalletPage1 from '../pages/WalletPage1';
import WalletPage2 from '../pages/WalletPage2';

const WalletRoutes = () => (
  <Routes>
    <Route path="/" element={<WalletHome />} />
    <Route path="/page1" element={<WalletPage1 />} />
    <Route path="/page2" element={<WalletPage2 />} />
  </Routes>
);

export default WalletRoutes;
