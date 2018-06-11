/* eslint-env jest */
import React from 'react';

import ModalClose from './';

describe('Test <ModalClose />', () => {
  const mockOnClick = jest.fn();

  it('should render ModalClose correctly with required props', () => {
    const wrapper = shallow(<ModalClose onClick={mockOnClick} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render ModalClose and call onClick when clicked', () => {
    const wrapper = shallow(<ModalClose onClick={mockOnClick} />);
    wrapper.simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });
});
