/* eslint-env jest */
import React from 'react';
import styled from 'styled-components';
import 'jest-styled-components';

import Input from './';

const StyledLabel = styled.span`
  font-weight: 400;
`;

describe('Test <Input />', () => {
  it('should render Input correctly with only required props', () => {
    const wrapper = shallow(<Input id="one" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with autoFocus', () => {
    const wrapper = shallow(<Input id="one" autoFocus />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with a label', () => {
    const wrapper = shallow(<Input id="one" label="First Name" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with a label and required flag', () => {
    const wrapper = shallow(<Input id="one" label="First Name" required />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with type: email', () => {
    const wrapper = shallow(<Input id="one" label="Email" type="email" required />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with a label and an error', () => {
    const wrapper = shallow(<Input id="one" label="First Name" error="New error" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with type: date', () => {
    const wrapper = shallow(<Input id="one" type="date" label="Start date" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with type: password', () => {
    const wrapper = shallow(<Input id="one" type="password" label="Password" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with a function as label', () => {
    const wrapper = shallow(
      <Input
        id="one"
        label={() => (
          <span>
            First name <span>(must be full legal name)</span>
          </span>
        )}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with HTML as label', () => {
    const wrapper = shallow(
      <Input
        id="one"
        label={
          <span>
            First name <span>(must be full legal name)</span>
          </span>
        }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Input correctly with a styled component as label', () => {
    const wrapper = shallow(
      <Input
        id="one"
        label={
          <StyledLabel>
            First name <StyledLabel>(must be full legal name)</StyledLabel>
          </StyledLabel>
        }
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
