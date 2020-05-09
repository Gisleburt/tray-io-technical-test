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

  it('should allow setting to required', () => {
    const termsWrapper = shallow(<Input type={InputType.Checkbox} name="terms" required />);
    expect(termsWrapper.prop('required')).to.equal(true);

    const newsLetterWrapper = shallow(<Input type={InputType.Checkbox} name="news-letter" />);
    expect(newsLetterWrapper.prop('required')).to.equal(false);
  });

  it('should allow setting an initial value', () => {
    const jobDescriptionWrapper = shallow(
      <Input type={InputType.Text} name="job-description" value="Software Engineer" />,
    );
    expect(jobDescriptionWrapper.prop('value')).to.equal('Software Engineer');
  });
});
