import React from 'react';
import loadable from '@loadable/component'

interface ILoader {
  (page: any): any;
}

const Loader: ILoader = (page) => {

  const Page = loadable(() => import(`../pages/${page}.tsx`), {
    fallback: <div>Loading...</div>,
  })
  return <Page />
};

export default Loader;