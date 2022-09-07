import { getPopular } from '@apis/index';
import { Container, PageTitle } from '@components/index';
import BANNER from '../../assets/banner.png';
import * as S from './style';
import InfiniteScroll from '@components/InfiniteScroll';

export default function Homepage() {
  return (
    <div>
      <S.Banner src={BANNER} />
      <Container>
        <PageTitle title="WHAT’S POPULAR" />
        <InfiniteScroll callApi={getPopular}/>
      </Container>
    </div>
  );
}
