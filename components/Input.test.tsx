import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Input, { InputType } from './Input';

describe('Input', () => {
  it('should take a type and produce the correct input', () => {
    const passwordWrapper = shallow(<Input type={InputType.Password} />);
    expect(passwordWrapper.prop('type')).to.equal('password');

    const emailWrapper = shallow(<Input type={InputType.Email} />);
    expect(emailWrapper.prop('type')).to.equal('email');
  });
});
