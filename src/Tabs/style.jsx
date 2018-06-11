import styled from 'styled-components';
import media from '../../utils/styles/mediaQueries';

export const LabelText = styled.span`
  display: none;
  ${media.tablet`
    display: inline-block;
    margin-left: .5em;
  `};
`;
