import React from "react";
import Form, { Field } from 'rc-field-form';
import Input from './components/Input';
import CustomizeInput from "./components/CustomInput";

const Main = () => (
  <Form
    onFinish={values => {
      console.log('Finish:', values);
    }}
  >
    <Field name="username">
      <Input placeholder="Username" />
    </Field>
    <Field name="password">
      <Input placeholder="Password" />
    </Field>
    <Field name={['name', 0, 'first']}>
      <CustomizeInput />
    </Field>
    <button>Submit</button>
  </Form>
)

export default Main;
