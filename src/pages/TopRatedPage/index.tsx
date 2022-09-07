import { getTopRated } from '@apis/index';
import { Container, PageTitle } from '@components/index';
import InfiniteScroll from '@components/InfiniteScroll';

export default function TopRatedPage() {
  return (
    <Container>
      <PageTitle title="TOP RANK MOVIES" />
      <InfiniteScroll callApi={getTopRated}/>
    </Container>
  );
}
