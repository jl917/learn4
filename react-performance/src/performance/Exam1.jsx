import React, { useState, useMemo } from 'react';

// no memo
const TextLength = ({ value }) => {
  console.log('render textlength');
  return <p>{value}</p>
}

// memo
const HasText = React.memo( ({ has }) => {
  console.log('render hasText');
  return <p>{has ? 'true' : 'false'}</p>
});

const App = () => {
  const [count, setCount] = useState(0);

  const onChange = (e) => {
    setCount(e.target.value.length)
  }
  return (
    <>
      <input onChange={onChange} />
      <TextLength value={count} />
      <HasText has={count !== 0} />
    </>
  )
}

export default App;