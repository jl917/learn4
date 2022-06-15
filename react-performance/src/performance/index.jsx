import React from 'react'
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';

import { createRoot } from 'react-dom/client';
import App from './Exam2';
// import App from './App';


const root = createRoot(document.getElementById('root'));

root.render(<RecoilRoot><App /></RecoilRoot>)


// render(<App />, document.getElementById('root'))