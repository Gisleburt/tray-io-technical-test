import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import IndexPage from './index';
import Form from '../components/molecules/Form';
import { privacyInputs, userInputs } from '../content/forms';

describe('index', () => {
  it('should render the user form', () => {
    const wrapper = shallow(<IndexPage />);
    const userForm = wrapper.find(Form).filterWhere((form) => form.prop('inputs') === userInputs);
    expect(userForm).to.have.length(1);
  });

  it('should render the privacy form', () => {
    const wrapper = shallow(<IndexPage />);
    const userForm = wrapper.find(Form).filterWhere((form) => form.prop('inputs') === privacyInputs);
    expect(userForm).to.have.length(1);
  });
});
