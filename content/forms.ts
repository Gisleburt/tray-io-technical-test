import {InputProps, InputType} from '../components/atoms/Input';

export const userInputs: InputProps[] = [
  {name: 'name', required: true, type: InputType.Text },
  {name: 'role', type: InputType.Text },
  {name: 'email', required: true, type: InputType.Email },
  {name: 'password', required: true, type: InputType.Password },
  {name: 'Submit', required: true, type: InputType.Submit },
];

export const privacyInputs: InputProps[] = [
  {name: 'updates', type: InputType.Checkbox },
  {name: 'communications', type: InputType.Checkbox },
];
