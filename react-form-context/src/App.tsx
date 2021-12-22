import React from 'react';
import Input from './components/Input';
import useForm from './form/useForm';

const App = () => {
  const form = useForm();

  const onClick = () => {
    console.log(form.getValues());
    console.log(JSON.stringify(form.getValues()))
  }

  const onSetValue = () => {
    form.setValues('test[0].name', 'daolang');
  }
  return (
    <div>
      <Input name="test[0].name" value="adaf" />
      <Input name="test[1].name" />
      <Input name="test[2].name" />
      <Input name="password" />
      <button onClick={onClick}>submit</button>
      <button onClick={onSetValue}>set value</button>
    </div>
  )
}

export default App;
