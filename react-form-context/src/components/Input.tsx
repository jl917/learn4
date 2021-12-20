import useForm from '@/form/useForm';
import React, { useEffect, useState, useRef } from 'react';

interface Props {
  name: string;
}

const Input: React.FC<Props> = ({ name }) => {
  const form = useForm();
  
  const onChange = (e: any) => {
    form.setValues(name, e.target.value, false);
  }

  return <input onChange={onChange} name={name} />
}

export default Input;
