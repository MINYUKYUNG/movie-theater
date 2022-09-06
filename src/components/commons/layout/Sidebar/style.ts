import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.nav`
  width: 220px;
  min-width: 220px;
  padding-top: 25px;
  background-color: ${theme.colors.SIDE};
  color: ${theme.colors.WHITE};
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 50px;
      color: ${theme.colors.B60};
      display: flex;
      align-items: center;
      padding: 0 35px;
      font-size: 0;
      cursor: pointer;

      :hover {
        color: ${theme.colors.WHITE};
        background-color: ${theme.colors.HOVER};
        svg {
          fill: ${theme.colors.WHITE};
        }
      }

      svg {
        fill: ${theme.colors.B60};
        font-size: ${theme.fontSize.SEMI_M};
        margin-right: 12px;
      }
      span {
        height: 11px;
        text-transform: uppercase;
        font-size: ${theme.fontSize.SMALL};
        font-weight: bold;
      }
    }
  }
`;
