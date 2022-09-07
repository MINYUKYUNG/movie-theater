import styled from 'styled-components';
import theme from '../../styles/theme'

export const ScrollBox = styled.div``;

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
`

export const ScrollTopBtn = styled.button`
  position: sticky;
  bottom: 20px;
  left: 90%;
  width: 25px;
  height: 25px;
  color: ${theme.colors.MAIN};
  & > svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
  &:hover {
    color: ${theme.colors.RED};
  }
`;
