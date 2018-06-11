/* eslint-env jest */
import React from 'react';

import noop from 'lodash/noop';

import theme from 'themes';

import {
  StyledDropzone,
  Container,
  StyledUploadIcon,
  Label,
  PickFileButton,
  ContainerText,
  Message,
  AttentionIcon,
} from './style';

describe('Test <StyledDropzone />', () => {
  it('should render StyledDropzone with theme props', () => {
    const wrapper = shallow(<StyledDropzone theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Container />', () => {
  it('should render Container with theme props', () => {
    const wrapper = shallow(<Container theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <StyledUploadIcon />', () => {
  it('should render StyledUploadIcon with theme props', () => {
    const wrapper = shallow(<StyledUploadIcon theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Label />', () => {
  it('should render Label with theme props', () => {
    const wrapper = shallow(<Label theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <PickFileButton />', () => {
  it('should render PickFileButton with theme props', () => {
    const wrapper = shallow(
      <PickFileButton theme={theme} onClick={noop}>
        Test
      </PickFileButton>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <ContainerText />', () => {
  it('should render ContainerText with theme props', () => {
    const wrapper = shallow(<ContainerText theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <Message />', () => {
  it('should render Message with theme props', () => {
    const wrapper = shallow(<Message theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Message with theme props and error flag', () => {
    const wrapper = shallow(<Message theme={theme} error />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test <AttentionIcon />', () => {
  it('should render AttentionIcon with theme props', () => {
    const wrapper = shallow(<AttentionIcon theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
