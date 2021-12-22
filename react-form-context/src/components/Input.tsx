import useForm from '@/form/useForm';
import React from 'react';

interface Props {
  name: string;
  value?: string;
}

const Input: React.FC<Props> = ({ name, value = "" }) => {
  const form = useForm();

  const onChange = (e: any) => {
    form.setValues(name, e.target.value, false);
  }

  return <input onChange={onChange} name={name} defaultValue={value} />
}

export default Input;
