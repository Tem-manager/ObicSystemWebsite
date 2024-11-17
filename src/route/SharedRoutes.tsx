import { Route, Routes } from 'react-router-dom';
// import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import Page404 from '../pages/Page404';
import Login from '../pages/Login';

const SharedRoutes = () => (

  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/profile" element={<UserProfile />} />
    <Route path="*" element={<Page404 />} />
  </Routes>

);  

export default SharedRoutes;
