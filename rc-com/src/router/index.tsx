import Main from '@/pages/Main';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from '@/pages/About';

const Router: React.FC = () => (
  <>
    <ul>
      <li><Link to="/">basic</Link></li>
      <li><Link to="/about">about</Link></li>
    </ul>
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </>
);

export default Router;