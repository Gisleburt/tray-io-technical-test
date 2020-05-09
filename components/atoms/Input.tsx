import React from 'react';

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

export type InputValue = string | string[] | number

export interface InputProps {
  type: InputType;
  name: string;
  label?: string;
  required?: boolean;
  value?: InputValue;
}

let idCounter = 0;

const Input = ({
  type, name, required, value, label,
}: InputProps): JSX.Element => {
  const id = `input-${name}-${idCounter += 1}`;
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input id={id} type={type} name={name} required={required || false} defaultValue={value} />
    </label>
  );
};

Input.displayName = 'Input';

export default Input;
