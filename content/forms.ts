import { InputProps, InputType } from '../components/atoms/Input';

export const userInputs: InputProps[] = [
  {
    name: 'name', label: 'name:', required: true, type: InputType.Text,
  },
  { name: 'role', label: 'role:', type: InputType.Text },
  {
    name: 'email', label: 'email:', required: true, type: InputType.Email,
  },
  {
    name: 'password', label: 'password:', required: true, type: InputType.Password,
  },
];

export const privacyInputs: InputProps[] = [
  { name: 'updates', label: 'Receive updates about Tray.io by email', type: InputType.Checkbox },
  {
    name: 'communications',
    label: 'Receive communication by email for other products created by the Tray.io team',
    type: InputType.Checkbox,
  },
];
