import styled from 'styled-components';

export const LabelStyled = styled.label`
  color: ${({ theme }) => theme.color.veryDarkBlue};
  font-family: ${({ theme }) => theme.base.fontFamily};
  ${({ theme, error }) => error && `color: ${theme.color.red}`};
  ${({ theme, disabled }) => disabled && `color: ${theme.color.lightGrey2}`};
  margin-bottom: 7px;
  display: block;
  font-size: ${({ theme }) => theme.base.fontSize};
  font-weight: 600;
`;
LabelStyled.displayName = 'LabelStyled';

export const Asterisk = styled.span`
  color: ${({ theme, disabled }) => (disabled ? theme.color.lightGrey2 : theme.color.red)};
  display: inline-block;
  margin-left: 3px;
`;
Asterisk.displayName = 'Asterisk';
