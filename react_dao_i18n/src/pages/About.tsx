import React, { useState } from "react";
import Button from './components/button';

const About = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h1>About</h1>
      <Button />
    </div>
  )
}

export default About;
