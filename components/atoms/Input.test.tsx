import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Input, { InputType } from './Input';

describe('Input', () => {
  it('should take a type and produce the correct input', () => {
    const passwordWrapper = shallow(<Input type={InputType.Password} name="password" />);
    expect(passwordWrapper.find('input').prop('type')).to.equal('password');

    const emailWrapper = shallow(<Input type={InputType.Email} name="password" />);
    expect(emailWrapper.find('input').prop('type')).to.equal('email');
  });

  it('should take a name', () => {
    const jobDescriptionWrapper = shallow(<Input type={InputType.Text} name="job-description" />);
    expect(jobDescriptionWrapper.find('input').prop('name')).to.equal('job-description');
  });

  it('should allow setting to required', () => {
    const termsWrapper = shallow(<Input type={InputType.Checkbox} name="terms" required />);
    expect(termsWrapper.find('input').prop('required')).to.equal(true);

    const newsLetterWrapper = shallow(<Input type={InputType.Checkbox} name="news-letter" />);
    expect(newsLetterWrapper.find('input').prop('required')).to.equal(false);
  });

  it('should allow setting an default value', () => {
    const jobDescriptionWrapper = shallow(
      <Input type={InputType.Text} name="job-description" value="Software Engineer" />,
    );
    expect(jobDescriptionWrapper.find('input').prop('defaultValue')).to.equal('Software Engineer');
  });

  it('should be able to set a label', () => {
    const jobDescriptionWrapper = shallow(
      <Input type={InputType.Text} name="role" label="Job description" value="Software Engineer" />,
    );
    expect(jobDescriptionWrapper.text()).to.equal('Job description');
  });

  it('should give each input a unique id', () => {
    const inputsWrapper = mount(
      <>
        <Input type={InputType.Text} name="name" />
        <Input type={InputType.Text} name="name" />
      </>,
    );
    const inputs = inputsWrapper.find('input');
    expect(inputs.at(0).prop('id')).to.not.equal(inputs.at(1).prop('id'));
  });
});
