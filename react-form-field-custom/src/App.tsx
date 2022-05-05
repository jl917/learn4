import React, { useState } from 'react';
import Form from './FormCustom/Form';

const App = () => {
  const [isP, setP] = useState(true);
  const onClick = () => {
  }

  const onSetValue = () => {
  }

  const onFinish = (values: any) => { console.log(values) }
  return (
    <div>
      <Form onFinish={onFinish}>
        <input name="username"/>

        {isP && <input name="password"/>}
        {/* <Field name="username">
          <Input placeholder="username" />
        </Field>
        <Field name="password">
          <Input placeholder="username" />
        </Field>

        <Field name="email">
          <Input placeholder="email" />
        </Field> */}
        <button type="submit">submit</button>
        <button onClick={onSetValue}>set value</button>
      </Form>
      <button onClick={() => setP(!isP)}>toggle p</button>
    </div>
  )
}

export default App;
