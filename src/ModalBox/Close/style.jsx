import styled from 'styled-components';
import { media } from 'utils';

const CloseModal = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.color.veryDarkBlue};
  font-family: ${({ theme }) => theme.base.fontFamily};
  font-size: 43px;
  font-weight: 300;
  line-height: 25px;
  padding: 5px;
  position: absolute;
  right: 0;
  top: 0;
  ${media.desktop`
    right: 3px;
    top: 3px;
  `};
  z-index: 4;

  &:hover {
    cursor: pointer;
  }

  &:active {
    outline: none;
  }
`;
CloseModal.displayName = 'CloseModal';
export default CloseModal;
