import styled from 'styled-components';
import ReactModal from 'react-modal';
import { media } from 'utils';

export const StyledModal = styled(ReactModal)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: ${({ tall }) => (tall ? 'flex-start' : 'center')};
  justify-content: center;
  background-color: rgba(29, 49, 65, 0.85);
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 1.2rem;
  z-index: 1031;
`;
StyledModal.displayName = 'StyledModal';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  max-width: 100%;
  padding: 28px 20px;
  ${media.phone`
    max-width: 700px;
  `};
  ${media.desktop`
    padding: 30px;
  `};
  position: relative;
`;
Container.displayName = 'Container';
