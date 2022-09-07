import styled from 'styled-components';
import theme from '../../styles/theme'

export const ScrollBox = styled.div``;

export const TriangleBox = styled.div`
  display: flex;
  justify-content: center;
`

export const TriangleImg = styled.img`
  width: 80px;
  height: 80px;
  display: inline-block;
`;

export const ScrollTopBtn = styled.button`
  position: sticky;
  bottom: 20px;
  left: 50%;
  width: 30px;
  height: 30px;
  color: ${theme.colors.MAIN};
  & > svg {
    width: 100%;
    height: 100%;
  }
`;
