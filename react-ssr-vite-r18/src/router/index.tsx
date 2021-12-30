import Main from '@/pages/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './loader-suspense';

// import Loader from './loader';

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
      {/* <Route path="about" element={<About />} />
      <Route path="product" element={<Product />} /> */}
      {
        // Object.entries(routes).map(([key, value]) => <Route path={`/${key}`} element={Loader(value)} />)
      }
      {
        routes.map(({ path, elementName }) => <Route key={path} path={path} element={Loader(elementName)} />)
      }
    </Route>
  </Routes>
);

export default Router;