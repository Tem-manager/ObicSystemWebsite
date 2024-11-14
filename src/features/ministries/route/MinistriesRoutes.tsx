import { Route, Routes } from 'react-router-dom';
import MinistriesHome from '../pages/MinistriesHome';
import MinistriesPage1 from '../pages/MinistriesPage1';
import MinistriesPage2 from '../pages/MinistriesPage2';

const MinistriesRoutes = () => (
  <Routes>
    <Route path="/" element={<MinistriesHome />} />
    <Route path="/page1" element={<MinistriesPage1 />} />
    <Route path="/page2" element={<MinistriesPage2 />} />
  </Routes>
);

export default MinistriesRoutes;
