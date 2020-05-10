import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import IndexPage from '../pages/index';
import Form, { FormValues } from '../components/molecules/Form';
import { privacyInputs, userInputs } from '../content/forms';
import DoneInfo from '../components/molecules/DoneInfo';

describe('index', () => {
  describe('in its initial state', () => {
    const wrapper = shallow(<IndexPage />);

    it('should render the user form', () => {
      const userForm = wrapper.find(Form).filterWhere((form) => form.prop('inputs') === userInputs);
      expect(userForm).to.have.length(1);
    });

    it('should not render the privacy form', () => {
      const privacyForm = wrapper.find(Form).filterWhere((form) => form.prop('inputs') === privacyInputs);
      expect(privacyForm).to.have.length(0);
    });

    it('should not render the done information', () => {
      const done = wrapper.find(DoneInfo);
      expect(done).to.have.length(0);
    });
  });

  describe('after submitting user data', () => {
    const wrapper = shallow(<IndexPage />);
    const onUserSubmit = wrapper.find(Form)
      .filterWhere((form) => form.prop('inputs') === userInputs)
      .prop('onSubmit') as (values: FormValues) => void;
    onUserSubmit({});

    it('should not render the user form', () => {
      const userForm = wrapper.find(Form).filterWhere((form) => form.prop('inputs') === userInputs);
      expect(userForm).to.have.length(0);
    });

    it('should render the privacy form', () => {
      const privacyForm = wrapper.find(Form).filterWhere((form) => form.prop('inputs') === privacyInputs);
      expect(privacyForm).to.have.length(1);
    });

    it('should not render the done information', () => {
      const done = wrapper.find(DoneInfo);
      expect(done).to.have.length(0);
    });
  });

  describe('after submitting privacy data', () => {
    const wrapper = shallow(<IndexPage />);
    const onUserSubmit = wrapper.find(Form)
      .filterWhere((form) => form.prop('inputs') === userInputs)
      .prop('onSubmit') as (values: FormValues) => void;
    onUserSubmit({});
    const onPrivacySubmit = wrapper.find(Form)
      .filterWhere((form) => form.prop('inputs') === privacyInputs)
      .prop('onSubmit') as (values: FormValues) => void;
    onPrivacySubmit({});

    it('should not render the user form', () => {
      const userForm = wrapper.find(Form).filterWhere((form) => form.prop('inputs') === userInputs);
      expect(userForm).to.have.length(0);
    });

    it('should not render the privacy form', () => {
      const privacyForm = wrapper.find(Form).filterWhere((form) => form.prop('inputs') === privacyInputs);
      expect(privacyForm).to.have.length(0);
    });

    it('should render the done information', () => {
      const done = wrapper.find(DoneInfo);
      expect(done).to.have.length(1);
    });
  });
});
