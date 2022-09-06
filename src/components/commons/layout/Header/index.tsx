import Logo from '../../../../assets/svgs/logo.svg';
import Search from '../../../../assets/svgs/search.svg';
import { useNavigate } from 'react-router-dom';
import { Container, Searchbar } from './style';
export default function Navigation() {
  const navigate = useNavigate();

  return (
    <Container>
      <img onClick={() => navigate('/')} src={Logo} alt="logo" />

      <Searchbar>
        <input type="text" placeholder="Search movies..." />

        <button>
          <img src={Search} alt="search" />
        </button>
      </Searchbar>
    </Container>
  );
}
