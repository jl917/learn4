import React from "react";
import Form, { Field } from 'rc-field-form';
import DatePicker from './components/Datepicker';

const PageDatepicker = () => (
  <Form
    onFinish={values => {
      console.log('Finish:', values);
    }}
  >
    <DatePicker />
    <button>Submit</button>
  </Form>
)

export default PageDatepicker;
