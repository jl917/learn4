import React from 'react';

const CustomizeInput = ({ value = '', ...props }: any) => {
  return <input style={{ outline: 'none' }} value={value} {...props} />
}

export default CustomizeInput;