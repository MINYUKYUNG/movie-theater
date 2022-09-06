import { Card, CardContainer, Container, PageTitle } from '@components/index';

export default function TopRatedPage() {
  return (
    <Container>
      <PageTitle title="TOP RANK MOVIES" />
      <CardContainer>
        <Card id={1} title={'TOMBOY'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
        <Card id={2} title={'외계+인 1부'} rate={8.96} />
      </CardContainer>
    </Container>
  );
}
