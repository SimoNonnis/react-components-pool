import styled from 'styled-components';

export const Container = styled.div`
  z-index: 99997;
  position: absolute;
  ${({ height, width }) => `
    height: ${height};
    width: ${width};
  `};
  &:before {
    content: '';
    position: absolute;
    z-index: 99998;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    ${({ background, opacity }) => `
      background-color: ${background};
      opacity: ${opacity};
    `};
  }
`;

export const SpinnerWrap = styled.div`
  left: 0;
  margin: 0 auto;
  position: relative;
  right: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99999;
`;
