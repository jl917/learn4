import React, { useRef } from 'react';

interface Props {
  onFinish: (values: any) => void;
}

const Form: React.FC<Props> = ({ children, onFinish }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    const result = {} as any;
    const formData = new FormData(formRef.current as HTMLFormElement);
    formData.forEach((value, key) => {
      if (!result[key]) {
        result[key] = formData.getAll(key).length > 1 ? formData.getAll(key) : formData.get(key);
      }
    });

    onFinish(result);
    e.preventDefault();
  }

  return <form onSubmit={onSubmit} ref={formRef}>{children}</form>;
};

export default Form;