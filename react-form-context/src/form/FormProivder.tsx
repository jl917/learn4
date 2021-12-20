import React from 'react';
import Context from './Context';

const FormProvider: React.FC<{}> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>
}

export default FormProvider;
