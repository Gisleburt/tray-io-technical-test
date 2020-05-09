import React from 'react';
import Input, { InputProps, InputValue } from '../atoms/Input';

export interface FormValues {
  [key: string]: InputValue;
}

export interface FormProps {
  inputs: InputProps[];
  onSubmit: (data: FormValues) => void;
}

const Form = ({ inputs, onSubmit }: FormProps): JSX.Element => {
  const formRef = React.useRef(null);

  const onSubmitWrapper = (e): boolean => {
    if (formRef.current) {
      const inputDomElements = formRef.current.getElementsByTagName('input');
      const output = Array.from(inputDomElements)
        .reduce((acc: FormValues, cur: HTMLInputElement) => ({ ...acc, [cur.name]: cur.value }), {}) as FormValues;
      onSubmit(output);
    }

    e.preventDefault();
    return false;
  };

  return (
    <form onSubmit={onSubmitWrapper} ref={formRef}>
      {inputs.map((input) => <Input {...input} key={input.name} />)}
    </form>
  );
};


Form.displayName = 'Form';

export default Form;
