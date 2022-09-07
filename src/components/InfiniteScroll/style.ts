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
  width: 30px;
  height: 30px;
  color: ${theme.colors.MAIN};
  & > svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    color: ${theme.colors.RED};
  }
`;
