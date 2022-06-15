import React, { useState } from 'react';

const ListItem = React.memo(({ title }) => {
  console.log('render item', title)
  return <li>{title}</li>
});

const List = React.memo(({ todos }) => {
  console.log('render list')
  return (
    <ul>
      {todos.map((e, i) => <ListItem title={e.title} key={i} />)}
    </ul>
  )
})

const ListRest = (props) => {
  return <List {...props} />
}

const App = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([
    { title: '1' },
    { title: '2' },
    { title: '3' },
  ])

  const add = () => {
    // setCount(count + 1);
    setArr([...arr, { title: `${arr.length + 1}` }])
  }
  return (
    <>
      <button onClick={add}>add</button>
      <ListRest todos={arr} />
      <h1>{count}</h1>
    </>
  )
}

export default App;