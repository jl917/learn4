import React from 'react';

const Input = (props: any) => {
  return <input {...props} />;
};

const CustomizeInput = ({ value = '', ...props }: any,) => (
  <Input style={{ outline: 'none' }} value={value} {...props} />
);

export default CustomizeInput;