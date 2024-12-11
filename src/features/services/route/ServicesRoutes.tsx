// import { Route, Routes } from 'react-router-dom';
// import ServicesHome from '../pages/ServicesHome';
// import ServicesPage1 from '../pages/ServicesPage1';
// import ServicesPage2 from '../pages/ServicesPage2';

import { lazy } from "react";

// const ServicesRoutes = () => (
//   <Routes>
//     <Route path="/" element={<ServicesHome />} />
//     <Route path="/page1" element={<ServicesPage1 />} />
//     <Route path="/page2" element={<ServicesPage2 />} />
//   </Routes>
// );

// export default ServicesRoutes;




const ServicesHome = lazy(() =>
  import("../pages/services-home/ServicesHome")
);

const Translation = lazy(() =>
  import("../pages/translation/Translation")
);

const ObicAi = lazy(() =>
  import("../pages/obic-ai/ObicAi")
);


const VIP = lazy(() =>
  import("../pages/vip/VIP")
);

const routes = [
  {
    path: "/",
    title: " Services | ServicesHome ",
    component: ServicesHome,
  },
  {
    path: "/translation",
    title: " Services | Translation ",
    component: Translation,
  },
  {
    path: "/obic-ai",
    title: " Services | ObicAi ",
    component: ObicAi,
  },
  {
    path: "/vip",
    title: " Services | VIP ",
    component: VIP,
  },
 
 
]
export default routes;