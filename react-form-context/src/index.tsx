import React from 'react';
import { render } from 'react-dom';
import App from './App';
import FormProvider from './form/FormProivder';

render(
  <FormProvider>
    <App />
  </FormProvider>,
  document.getElementById('app'),
);
