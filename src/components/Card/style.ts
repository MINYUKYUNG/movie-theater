import styled from 'styled-components';

export const Card = styled.div`
  height: 21vw;
  margin-right: 30px;
  margin-bottom: 40px;
  &:hover {
    position: relative;
    top: 2px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-top: 9px;
`;

export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Rate = styled.div`
  font-size: ${({ theme }) => theme.fontSize.X_SMALL};
  color: ${({ theme }) => theme.colors.MAIN};
  font-weight: 400;
  margin-top: 3px;
  margin-left: 2px;
`;
