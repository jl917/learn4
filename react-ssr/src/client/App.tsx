import React from 'react';
import { RecoilRoot } from 'recoil';
import Routes from '@/router';

const App = () => {
  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  )
}

export default App;
