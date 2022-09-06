import { Container } from './style';
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { ImFilm } from 'react-icons/im';
import { GiPopcorn } from 'react-icons/gi';

export default function Sidebar() {
  return (
    <Container>
      <ul>
        <li>
          <AiOutlineHome />
          <span>home</span>
        </li>
        <li>
          <AiOutlineStar />
          <span>top</span>
        </li>
        <li>
          <ImFilm />
          <span>now playing</span>
        </li>
        <li>
          <GiPopcorn />
          <span>upcoming</span>
        </li>
      </ul>
    </Container>
  );
}
