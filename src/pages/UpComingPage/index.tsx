import { getUpcoming } from '@apis/index';
import { Container, PageTitle } from '@components/index';
import InfiniteScroll from '@components/InfiniteScroll';

export default function UpComingPage() {
  return (
    <Container>
      <PageTitle title="UPCOMING MOVIES" />
      <InfiniteScroll callApi={getUpcoming}/>
    </Container>
  );
}
