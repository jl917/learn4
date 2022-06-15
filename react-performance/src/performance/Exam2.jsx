import React, { useState, useMemo } from 'react';

const EffectComponent = () => {
  console.log('render effect Component');
  return <>effect Component</>
}

const diff = (prev, next) => {
  console.log(prev === next);
  return prev === next;
}

const a = <EffectComponent />

const MemoEffectComponent = React.memo(EffectComponent, diff);

const App = () => {
  const [count, setCount] = useState(0); // state또는 context를 건드렸기 때문.
  const onChange = (e) => {
    setCount(count + 1)
  }

  return (
    <>
      <h2>Register</h2>
      <input onChange={onChange} />
      <p>{count}</p>
      <MemoEffectComponent />
    </>
  )
}

export default App;