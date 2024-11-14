import { Route, Routes } from 'react-router-dom';
import MarketHome from '../pages/MarketHome';
import MarketPage1 from '../pages/MarketPage1';
import MarketPage2 from '../pages/MarketPage2';

const MarketRoutes = () => (
  <Routes>
    {/* الصفحة الرئيسية للسوق */}
    <Route path="/" element={<MarketHome />} />
    <Route path="/page1" element={<MarketPage1 />} />
    <Route path="/page2" element={<MarketPage2 />} />
  </Routes>
);

export default MarketRoutes;
