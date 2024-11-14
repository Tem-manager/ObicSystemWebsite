import { Route, Routes } from 'react-router-dom';
import ServicesHome from '../pages/ServicesHome';
import ServicesPage1 from '../pages/ServicesPage1';
import ServicesPage2 from '../pages/ServicesPage2';

const ServicesRoutes = () => (
  <Routes>
    <Route path="/" element={<ServicesHome />} />
    <Route path="/page1" element={<ServicesPage1 />} />
    <Route path="/page2" element={<ServicesPage2 />} />
  </Routes>
);

export default ServicesRoutes;
