import Logo from '../../../../assets/svgs/logo-w.svg';
import { Container, Wrap } from './style';

export default function Footer() {
  return (
    <Container>
      <img src={Logo} />

      <Wrap>
        <span>COMPANY : Movie theater</span>
        <span>
          ADDRESS : 110, Sejong-daero, Jung-gu, Seoul, Republic of Korea
        </span>
        <br />
        <span>E-MAIL : aaaaa@gmail.com</span>
        <span>TEL : +82 (02) 1234-5678</span>
        <p>Copyright © MOVIETHEATER All right reserved.</p>
      </Wrap>
    </Container>
  );
}
