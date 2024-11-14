import { Route, Routes } from 'react-router-dom';
import EnjoyHome from '../pages/EnjoyHome';
import EnjoyPage1 from '../pages/EnjoyPage1';
import EnjoyPage2 from '../pages/EnjoyPage2';

const EnjoyRoutes = () => (
  <Routes>
    <Route path="/" element={<EnjoyHome />} />
    <Route path="/page1" element={<EnjoyPage1 />} />
    <Route path="/page2" element={<EnjoyPage2 />} />
  </Routes>
);

export default EnjoyRoutes;
