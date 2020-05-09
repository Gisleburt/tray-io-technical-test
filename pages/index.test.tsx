import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import IndexPage from './index';

describe('index', () => {
  it('should render', () => {
    const wrapper = shallow(<IndexPage />);
    expect(wrapper.text()).to.equal('Hello, world!');
  });
});
