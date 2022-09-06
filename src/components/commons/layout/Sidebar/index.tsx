import { Container } from './style';
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { ImFilm } from 'react-icons/im';
import { GiPopcorn } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Container>
      <ul>
        <li onClick={() => navigate('/')}>
          <AiOutlineHome />
          <span>home</span>
        </li>
        <li onClick={() => navigate('/top_rated')}>
          <AiOutlineStar />
          <span>top</span>
        </li>
        <li onClick={() => navigate('/now_playing')}>
          <ImFilm />
          <span>now playing</span>
        </li>
        <li onClick={() => navigate('/up_coming')}>
          <GiPopcorn />
          <span>upcoming</span>
        </li>
      </ul>
    </Container>
  );
}
