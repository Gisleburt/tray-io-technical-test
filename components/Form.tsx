import React from 'react';
import Input, { InputProps } from './Input';

export interface FormProps {
  inputs: InputProps[];
}

const Form = ({ inputs }: FormProps): JSX.Element => (
  <form>
    {inputs.map((input) => <Input {...input} key={input.name} />)}
  </form>
);

Form.displayName = 'Form';

export default Form;
