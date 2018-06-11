import styled from 'styled-components';

export const ErrorStyled = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.base.fontSize};
  margin-top: 7px;
  min-height: 17px;
`;
