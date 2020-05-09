import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Input, { InputType } from './Input';

describe('Input', () => {
  it('should take a type and produce the correct input', () => {
    const passwordWrapper = shallow(<Input type={InputType.Password} name="password" />);
    expect(passwordWrapper.prop('type')).to.equal('password');

    const emailWrapper = shallow(<Input type={InputType.Email} name="password" />);
    expect(emailWrapper.prop('type')).to.equal('email');
  });

  it('should take a name', () => {
    const jobDescriptionWrapper = shallow(<Input type={InputType.Text} name="job-description" />);
    expect(jobDescriptionWrapper.prop('name')).to.equal('job-description');
  });
});
