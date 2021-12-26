import Main from '@/pages/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '@/pages/about';

// import Loader from './loader';

const routes = {
  'about': 'About'
}

const Router: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      
      {
        // suspense 지원 안함.
        /* {
          Object.entries(routes).map(([key, value]) => <Route path={`/${key}`} element={Loader(value)} />)
        } */
      }
    </Route>
  </Routes>
);

export default Router;