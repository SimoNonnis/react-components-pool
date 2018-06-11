import styled, { css } from 'styled-components';

const basicStyle = css`
  box-shadow: none;
  box-sizing: border-box;
  display: block;
  font-family: ${({ theme }) => theme.base.fontFamily};
  font-size: 16px;
  font-weight: inherit;
  height: auto;
  line-height: 24px;
  margin: 0;
  width: 100%;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.mediumBlue};
  }
`;

const borderStyle = css`
  border-radius: 2px;
  border: 1px solid;
`;

const defaultColor = css`
  ${borderStyle};
  border-color: ${({ theme }) => theme.color.stoneGrey};
  color: ${({ theme }) => theme.color.veryDarkBlue};
  caret-color: ${({ theme }) => theme.color.veryDarkBlue};
  &:focus {
    border-color: ${({ theme }) => theme.color.mediumBlue};
  }
  &::-webkit-datetime-edit-year-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-month-field {
    color: ${({ theme }) => theme.color.veryDarkBlue};
    font-weight: inherit;
  }
`;

const errorColor = css`
  ${borderStyle};
  border-color: ${({ theme }) => theme.color.red};
  &:focus {
    border-color: ${({ theme }) => theme.color.red};
  }
`;

const disabledColor = css`
  color: ${({ theme }) => theme.color.lightGrey2};
  border-color: ${({ theme }) => theme.color.lightGrey2};
  caret-color: ${({ theme }) => theme.color.lightGrey2};
  &:focus {
    border-color: ${({ theme }) => theme.color.lightGrey2};
  }
  &::-webkit-datetime-edit-year-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-month-field {
    color: ${({ theme }) => theme.color.lightGrey2};
    font-weight: inherit;
  }
`;

export const InputStyled = styled.input`
  ${basicStyle};
  ${defaultColor};
  ${({ error }) => error && errorColor};
  ${({ disabled }) => disabled && disabledColor};
  padding: 12px 15px;
`;

export const SelectStyled = styled.select`
  ${basicStyle};
  color: ${({ theme, disabled }) => (disabled ? theme.color.lightGrey2 : theme.color.veryDarkBlue)};
  padding: 13px 50px 13px 15px;
  -ms-appearance: none !important;
  appearance: none !important;
  background-image: none !important;
  background: transparent !important;
  border-radius: 0 !important;
  border: 0 !important;
  box-shadow: none !important;
  outline: 0 !important;
`;

export const SelectWrap = styled.div`
  ${defaultColor};
  ${({ error }) => error && errorColor};
  ${({ disabled }) => disabled && disabledColor};
  position: relative;
  &:after {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid
      ${({ theme, disabled }) => (disabled ? theme.color.lightGrey2 : theme.color.veryDarkBlue)};
    content: '';
    height: 0;
    pointer-events: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    width: 0;
    z-index: 2;
  }
`;

export const TextareaStyled = styled.textarea`
  ${basicStyle};
  ${defaultColor};
  ${({ error }) => error && errorColor};
  ${({ disabled }) => disabled && disabledColor};
  padding: 15px;
  resize: ${({ disabled }) => (disabled ? 'none' : 'vertical')};
`;
