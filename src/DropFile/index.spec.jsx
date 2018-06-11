/* eslint-env jest */
import React from 'react';

import DropFile from './';

describe('Test <DropFile />', () => {
  const mockFunction = jest.fn();
  it('should render DropFile correctly with default props', () => {
    const wrapper = shallow(<DropFile />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with acceptText prop', () => {
    const wrapper = shallow(<DropFile acceptText="Only images are allowed" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with accept prop', () => {
    const wrapper = shallow(<DropFile accept="application/pdf" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with onDrop prop', () => {
    const wrapper = shallow(<DropFile onDrop={mockFunction} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with onDropAccepted prop', () => {
    const wrapper = shallow(<DropFile onDropAccepted={mockFunction} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with onDropRejected prop', () => {
    const wrapper = shallow(<DropFile onDropRejected={mockFunction} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with errorMessage prop', () => {
    const wrapper = shallow(<DropFile errorMessage="Pdf are not allowed" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with dropAreaLabel prop', () => {
    const wrapper = shallow(<DropFile dropAreaLabel="Test Label" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with dropAreaLabel prop as a function', () => {
    const wrapper = shallow(
      <DropFile dropAreaLabel={() => <span>dropAreaLabel component</span>} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with buttonLabel prop', () => {
    const wrapper = shallow(<DropFile buttonLabel="Test buttonLabel" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with buttonLabel prop', () => {
    const wrapper = shallow(<DropFile buttonLabel={() => <span>buttonLabel component</span>} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with multiple prop', () => {
    const wrapper = shallow(<DropFile multiple />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render DropFile correctly with className prop', () => {
    const wrapper = shallow(<DropFile className="testClass" />);
    expect(wrapper).toMatchSnapshot();
  });
});
