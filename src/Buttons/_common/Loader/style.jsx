import styled from 'styled-components';
import Spinner from '../../../Icons/Spinner';

export const SpinnerContainer = styled.div`
  position: relative;
`;

export const SpinnerStyled = styled(Spinner)`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: -3px;
  ${({ size }) => size === 'large' && 'top: -5px'};
  ${({ size }) => size === 'small' && 'top: 0'};
`;
