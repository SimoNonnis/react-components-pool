import styled from 'styled-components';

import Dropzone from 'react-dropzone';

import UploadIcon from 'components/Icons/UploadIcon';
import Attention from 'components/Icons/Attention';
import P from 'components/Typography/P';
import Button from 'components/Buttons/Button';

export const StyledDropzone = styled(Dropzone)`
  border: 1px dashed ${({ theme }) => theme.color.mediumGrey};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.veryDarkBlue};
  font-size: 16px;
  font-weight: 400;
`;

export const StyledUploadIcon = styled(UploadIcon)`
  color: ${({ theme }) => theme.color.lightGrey4};
`;

export const Label = styled(P)`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const PickFileButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ContainerText = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  padding-bottom: 0;
  text-align: center;
`;

export const Message = styled(P)`
  color: ${({ error, theme }) => (error ? theme.color.red : theme.color.mediumGrey)};
  font-size: ${({ theme }) => theme.base.fontSize};
  font-style: ${({ error }) => (error ? 'normal' : 'italic')};
  margin-bottom: 0;
  margin-top: ${({ error, theme }) => (error ? theme.spacing.sm : '0')};
  ${({ error }) =>
    error &&
    `display: flex;
     align-items: center;
     justify-content: center;
  `};
`;

export const AttentionIcon = styled(Attention)`
  padding-right: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.color.red};
`;
