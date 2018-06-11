/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';

import CheckBox from './';
import { Check, ExampleLabel } from './style';

describe('Test <CheckBox />', () => {
  it('should render CheckBox correctly with only required props', () => {
    const wrapper = shallow(<CheckBox id="yes" label="Yes" name="choice" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render CheckBox correctly if checked true', () => {
    const wrapper = shallow(<CheckBox id="yes" label="Yes" name="choice" checked />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render CheckBox correctly with a label as a string', () => {
    const wrapper = shallow(<CheckBox id="yes" label="Label" name="choice" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render CheckBox correctly component with label as a function', () => {
    const wrapper = shallow(
      <CheckBox id="yes" label={() => <span>Label component</span>} name="choice" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render CheckBox correctly component with label as a styled component', () => {
    const labelComp = <ExampleLabel>Label</ExampleLabel>;
    const wrapper = shallow(<CheckBox id="yes" label={labelComp} name="choice" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange when checkbox is clicked', () => {
    const handleChangeMock = jest.fn();
    const wrapper = shallow(
      <CheckBox id="yes" label="Yes" name="choice" checked onChange={handleChangeMock} />
    );
    wrapper.find(Check).simulate('change');
    expect(handleChangeMock).toHaveBeenCalled();
  });

  it('should call handleBlur when checkbox is clicked', () => {
    const handleChangeMock = jest.fn();
    const handleBlurMock = jest.fn();

    const wrapper = shallow(
      <CheckBox
        id="yes"
        label="Yes"
        name="choice"
        checked
        onChange={handleChangeMock}
        onBlur={handleBlurMock}
      />
    );
    wrapper.find(Check).simulate('blur');
    expect(handleBlurMock).toHaveBeenCalled();
  });
});
