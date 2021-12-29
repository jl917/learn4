import React, { useState } from "react";

const About = () => {
  const [count, setCount] = useState(100);

  return (
    <div>
      <h1>About</h1>
      {count}
    </div>
  )
}

export default About;
