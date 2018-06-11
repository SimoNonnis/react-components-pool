import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  30% {
    transform: scale(.7);
  }
  75% {
    transform: scale(1.1);
  }
`;

const getColor = (theme, status) => {
  if (status === 'ready') return theme.color.green;
  if (status === 'awaiting') return theme.color.orange;
  return 'transparent';
};

export const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme, status }) => getColor(theme, status)};
  }};
  animation: ${({ status }) =>
    status === 'awaiting' ? `${pulse} 1.3s infinite backwards ease-out` : null};
`;
Circle.displayName = 'Circle';
