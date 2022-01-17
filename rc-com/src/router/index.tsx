import Main from '@/pages/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '@/pages/About';
import Loader from './loader-loadable';

// import Loader from './loader';

const routes = [
  {
    path: 'about',
    // element: <About />,
    elementName: 'About',
  }
]

const Router: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
);

export default Router;