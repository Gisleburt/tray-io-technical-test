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

interface Input {
  type: InputType;
  name: string;
  required?: boolean;
}

const Input = ({ type, name, required }: Input): JSX.Element => (
  <input type={type} name={name} required={required || false} />
);

Input.displayName = 'Input';

export default Input;
