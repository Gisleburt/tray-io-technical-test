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
  required?: boolean;
  value?: InputValue;
}

const Input = ({
  type, name, required, value,
}: InputProps): JSX.Element => (
  <input type={type} name={name} required={required || false} defaultValue={value} />
);

Input.displayName = 'Input';

export default Input;
