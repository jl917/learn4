import Main from '@/pages/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '@/pages/About';
import Product from '@/pages/Product';
// import Loader from './loader-loadable';

// import Loader from './loader';

const routes = {
  'about': 'About'
}

const Router: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} />
      {
        // Object.entries(routes).map(([key, value]) => <Route path={`/${key}`} element={Loader(value)} />)
      }
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