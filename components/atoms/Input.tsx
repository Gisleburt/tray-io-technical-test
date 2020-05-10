import React from 'react';
import styled from 'styled-components';

export enum InputType {
  Button = 'button',
  Checkbox = 'checkbox',
  Color = 'color',
  Date = 'date',
  DatetimeLocal = 'datetime-local',
  Email = 'email',
  File = 'file',
  Hidden = 'hidden',
  Image = 'image',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Radio = 'radio',
  Range = 'range',
  Reset = 'reset',
  Search = 'search',
  Submit = 'submit',
  Tel = 'tel',
  Text = 'text',
  Time = 'time',
  Url = 'url',
  Week = 'week',
}

export type InputValue = string | string[] | number;

export interface InputProps {
  type: InputType;
  name: string;
  label?: string;
  required?: boolean;
  value?: InputValue;
}

const StyledLabel = styled.label<InputProps>`
  display: flex;
  padding: 4px 0;
  flex-direction: ${({ type }): string => (type === InputType.Checkbox ? 'row-reverse' : 'column')};
  justify-content: ${({ type }): string => (type === InputType.Checkbox ? 'flex-end' : 'flex-start')};
  
  input {
    display: block;
    border: 2px solid black;
    flex-grow: ${({ type }): number => (type === InputType.Checkbox ? 0 : 1)};
  }
  
  span::after {
    display: ${({ required }): string => (required ? 'inline' : 'none')};
    content: ' *';
    color: red;
  }
`;

let idCounter = 0;

const Input = (props: InputProps): JSX.Element => {
  const {
    type,
    name,
    required,
    value,
    label,
  } = props;
  const id = `input-${name}-${idCounter += 1}`;
  return (
    <StyledLabel htmlFor={id} {...props}>
      <span>{label}</span>
      <input id={id} type={type} name={name} required={required || false} defaultValue={value} />
    </StyledLabel>
  );
};

Input.displayName = 'Input';

export default Input;
