/* eslint-env jest */
import React from 'react';

import 'jest-styled-components';
import styled from 'styled-components';

import theme from 'themes';
import RadioBox from './';
import { Radio } from './style';

export const StyledLabel = styled.div`
  color: coral;
`;

describe('Test <RadioBox />', () => {
  it('should render RadioBox correctly with only required props', () => {
    const wrapper = shallow(<RadioBox id="ok" label="Ok" name="cool" theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render RadioBox correctly if checked true', () => {
    const wrapper = shallow(<RadioBox id="no" label="No" name="cool" checked theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange when RadioBox is clicked', () => {
    const handleChangeMock = jest.fn();
    const wrapper = shallow(
      <RadioBox
        id="yes"
        label="Yes"
        name="choice"
        checked
        onChange={handleChangeMock}
        theme={theme}
      />
    );
    wrapper.find(Radio).simulate('change');
    expect(handleChangeMock).toHaveBeenCalled();
  });

  it('should render RadioBox correctly with label as a function', () => {
    const wrapper = shallow(
      <RadioBox id="yes" label={() => <span>Label component</span>} name="choice" theme={theme} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render RadioBox correctly component with label as a styled component', () => {
    const testLabel = <StyledLabel>Label</StyledLabel>;
    const wrapper = shallow(
      <RadioBox id="yes" label={testLabel} name="choice" error="testError" theme={theme} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render RadioBox correctly component with label containing html tags', () => {
    const wrapper = shallow(
      <RadioBox id="yes" label={<span>Label</span>} name="choice" error="testError" theme={theme} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleBlur when RadioBox is clicked', () => {
    const handleChangeMock = jest.fn();
    const handleBlurMock = jest.fn();

    const wrapper = shallow(
      <RadioBox
        id="yes"
        label="Yes"
        name="choice"
        checked
        onChange={handleChangeMock}
        onBlur={handleBlurMock}
        theme={theme}
      />
    );
    wrapper.find(Radio).simulate('blur');
    expect(handleBlurMock).toHaveBeenCalled();
  });
});
