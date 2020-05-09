import React from 'react';
import jsdom from 'jsdom-global';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Form, { FormValues } from './Form';
import Input, { InputProps, InputType } from '../atoms/Input';

describe('Form', () => {
  before(function () {
    this.jsdom = jsdom();
  });

  after(function () {
    this.jsdom();
  });

  it('should take an array of input parameters to produce the form', () => {
    const inputs: InputProps[] = [
      { name: 'name', type: InputType.Text, required: true },
      { name: 'role', type: InputType.Text },
      { name: 'submit', type: InputType.Submit },
    ];
    const formWrapper = shallow(<Form inputs={inputs} onSubmit={(): void => { /* do nothing */ }} />);
    expect(formWrapper.find(Input)).to.have.length(3);
  });

  it('should return all data via a callback on submit', () => {
    const inputs: InputProps[] = [
      { name: 'name', type: InputType.Text, value: 'Test User' },
      { name: 'email', type: InputType.Text, value: 'example@example.com' },
    ];
    let receivedData: FormValues = {};
    const callback = (data): void => {
      receivedData = data;
    };
    const formWrapper = mount(<Form inputs={inputs} onSubmit={callback} />);
    formWrapper.simulate('submit');

    expect(receivedData).to.deep.equal({
      name: 'Test User',
      email: 'example@example.com',
    });
  });
});
