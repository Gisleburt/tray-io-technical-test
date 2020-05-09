import React from 'react';
import Input, { InputProps, InputValue } from './Input';

export interface FormValues {
  [key: string]: InputValue;
}

export interface FormProps {
  inputs: InputProps[];
  callback: (data: FormValues) => void;
}

const Form = ({ inputs, callback }: FormProps): JSX.Element => {
  const formRef = React.useRef(null);

  const onSubmit = (e): boolean => {
    if (formRef.current) {
      const inputDomElements = formRef.current.getElementsByTagName('input');
      const output = Array.from(inputDomElements)
        .reduce((acc: FormValues, cur: HTMLInputElement) => ({ ...acc, [cur.name]: cur.value }), {}) as FormValues;
      callback(output);
    }

    e.preventDefault();
    return false;
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      {inputs.map((input) => <Input {...input} key={input.name} />)}
    </form>
  );
};


Form.displayName = 'Form';

export default Form;
