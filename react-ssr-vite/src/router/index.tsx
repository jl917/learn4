import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import Loader from './loader-loadable';

// import Loader from './loader';

// const routes = {
//   'about': 'About'
// }

const routes = [
  {
    path: 'about',
    // element: <About />,
    elementName: 'About',
  },
  {
    path: 'product',
    // element: <Product />,
    elementName: 'Product',
  }
]

const Router: React.FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Main />} />
      {/* 
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} /> */}
      {
        routes.map(({ path, elementName }) => <Route key="path" path={`/${path}`} element={Loader(elementName)} />)
      }
    </Route>
  </Routes>
);

export default Router;