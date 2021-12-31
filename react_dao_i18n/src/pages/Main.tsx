import React, { useState } from "react";
import Button from './components/button';

const Main = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h1>main</h1>
      <Button />
    </div>
  )
}

export default Main;
