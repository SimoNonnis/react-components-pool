import styled from 'styled-components';

export const Container = styled.span`
  display: inline-block;
  position: relative;

  & + & {
    margin-left: 1em;
  }
`;
Container.displayName = 'Container';

export const Radio = styled.input`
  opacity: 0;
  position: absolute;
  right: 0;

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;
Radio.displayName = 'Radio';

export const Label = styled.label`
  cursor: pointer;
  font-family: ${({ theme }) => theme.base.fontFamily};
  color: ${({ theme }) => theme.color.veryDarkBlue};
  ${({ theme, error }) => error && `color: ${theme.color.red}`};
  ${({ theme, disabled }) => disabled && `color: ${theme.color.lightGrey1}`};
  font-size: 16px;
  line-height: 24px;
  position: relative;
  user-select: none;
  padding-left: 30px;
  display: inline-block;
  font-weight: 600;

  &:before {
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 100%;
    border: 1px solid;
    border-color: ${({ theme: { color }, disabled }) =>
      disabled ? color.lightGrey1 : color.stoneGrey};
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    content: '';
    height: 20px;
    left: 0;
    position: absolute;
    top: 0;
    width: 20px;
  }

  ${({ theme, disabled }) =>
    disabled ? `&:hover { &:before { background-color: ${theme.color.lightGrey3}; } }` : null};
  &:after {
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.color.mediumBlue};
    border-radius: 100%;
    content: '';
    opacity: 0;
    position: absolute;
    transform: scale(0);
    transition: all 0.2s;
    height: 12px;
    width: 12px;
    top: 5px;
    left: 5px;
  }
`;
Label.displayName = 'Label';
