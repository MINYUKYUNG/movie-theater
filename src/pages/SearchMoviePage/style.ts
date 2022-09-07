import theme from '@styles/theme';
import styled from 'styled-components';

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
