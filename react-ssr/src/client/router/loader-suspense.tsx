import React, { Suspense } from 'react';

interface ILoader {
  (page: any): any;
}

const Loader: ILoader = (page) => {
  const Page = React.lazy(() => import(`../pages/${page}.tsx`));
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Page />
    </Suspense>
  );
};

export default Loader;