import Main from '@/pages/Main';
import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Router: React.FC = () => (
  <Suspense fallback={<div>loading...</div>}>
    <ul>
      <li><Link to="/">basic</Link></li>
    </ul>
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Router;