import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  return (
    <NaviContainer>
      <TabLink onClick={() => navigate('/')}>HOME</TabLink>
      <TabLink onClick={() => navigate('/top_rated')}>TOP</TabLink>
      <TabLink onClick={() => navigate('/now_play')}>NOW PLAYING</TabLink>
      <TabLink onClick={() => navigate('/up_coming')}>UPCOMING</TabLink>
    </NaviContainer>
  );
}

const NaviContainer = styled.div`
  width: 15vw;
  background: #212121;
  padding-top: 20px;
`;

const TabLink = styled.p`
  color: #a9a9a9;
  font-weight: bold;
  font-size: 14px;
  padding: 18px 35px;
  cursor: pointer;
  &:hover {
    background: #2d2d2d;
  }
`;
