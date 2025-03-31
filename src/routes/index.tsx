import { BrowserRouter, Routes, Route } from 'react-router';

import Welcome from '@/pages';
import Drivers from '@/pages/drivers';
import Passengers from '@/pages/passengers';
import About from '@/pages/about';
import Terms from '@/pages/terms';

const AppRoutes = () => {
  return <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/Passengers" element={<Passengers />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  </BrowserRouter>;
};

export default AppRoutes;
