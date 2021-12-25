import React from 'react';
import { RecoilRoot } from 'recoil';
import Count from './coil/Count';

const App = () => {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

export default App;
