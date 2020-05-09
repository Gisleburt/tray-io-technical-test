import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Form from './Form';
import Input, { InputProps, InputType } from './Input';

describe('Form', () => {
  it('should take an array of input parameters to produce the form', () => {
    const inputs: InputProps[] = [
      { name: 'name', type: InputType.Text, required: true },
      { name: 'role', type: InputType.Text },
      { name: 'submit', type: InputType.Submit },
    ];
    const formWrapper = shallow(<Form inputs={inputs} />);
    expect(formWrapper.find(Input)).to.have.length(3);
  });
});
