import Main from '@/pages/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './loader-suspense';

// import Loader from './loader';

const routes = {
  'about': 'About',
  'product': 'Product'
}

const Router: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Main />} />
      {/* <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} /> */}
      {
        // Object.entries(routes).map(([key, value]) => <Route path={`/${key}`} element={Loader(value)} />)
      }
      {
        Object.entries(routes).map(([key, value]) => <Route key={key} path={`/${key}`} element={Loader(value)} />)
      }
    </Route>
  </Routes>
);

export default Router;