import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './Layout/AppLayout';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
         <AppLayout/>
    </Router>

  );
};

export default App;
