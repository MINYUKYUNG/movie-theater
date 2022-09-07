import styled from 'styled-components';

export const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.WHITE};
  width: 35vw;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.SEMI_M};
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  margin-right: 5px;
`;

export const OverView = styled.div`
  margin: 15px 0;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
`;

export const FurtherContainer = styled.div`
  widht: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 6px;
`;

export const FurtherTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  text-align: left;
  width: 70px;
`;

export const FurtherContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  font-weight: 400;
  text-align: left;
`;
