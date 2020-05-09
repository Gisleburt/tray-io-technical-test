import React from 'react';
import styled from 'styled-components';
import Input, { InputProps, InputValue } from '../atoms/Input';

export interface FormValues {
  [key: string]: InputValue;
}

export interface FormProps {
  inputs: InputProps[];
  onSubmit: (data: FormValues) => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 10px 5px;
`;

const StyledButton = styled.button`
  display: inline-block;
  color: white;
  font-weight: bold;
  background: green;
  margin-left: auto;
  border: 2px solid black;
  box-shadow: 2px 2px 2px black;
`;

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
    <StyledForm onSubmit={onSubmitWrapper} ref={formRef}>
      {inputs.map((input) => <Input {...input} key={input.name} />)}
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

Form.displayName = 'Form';

export default Form;
