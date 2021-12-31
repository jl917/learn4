import React from 'react';

interface ILocaleHOC {
  (Components: any): void
}

const LocaleHOC: ILocaleHOC = (Component) => {
  return (async function () {
    const a = await import('./locale/en_US.json');
    console.log(a.default );
    return () => <Component />
  }())
}

export default LocaleHOC;