/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import Textarea from './';

describe('Test <Textarea />', () => {
  it('should render Textarea correctly with only required props', () => {
    const wrapper = shallow(<Textarea id="testcomment" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Textarea correctly with a label', () => {
    const wrapper = shallow(<Textarea id="testcomment" label="Comment" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Textarea correctly if disabled', () => {
    const wrapper = shallow(<Textarea id="testcomment" label="Comment" disabled />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Textarea correctly with a label and required flag', () => {
    const wrapper = shallow(<Textarea id="testcomment" label="Comment" required />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Textarea correctly with a label and an error', () => {
    const wrapper = shallow(<Textarea id="testcomment" label="Comment" error="New error" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Textarea correctly passing rows value', () => {
    const wrapper = shallow(<Textarea id="testcomment" label="Comment" rows={10} />);
    expect(wrapper).toMatchSnapshot();
  });
});
