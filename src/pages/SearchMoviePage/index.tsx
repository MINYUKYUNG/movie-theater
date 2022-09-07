import { Card, CardContainer, Container, PageTitle } from '@components/index';
import { useLocation } from 'react-router-dom';
import { useInfiQry } from '@hooks/useInfiQry';
import { Fragment } from 'react';

interface MovieList {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
}

export default function SearchMoviePage() {
  const location = useLocation();
  const { value } = location.state as { value: string };
  const { movies, refetch, isLoading, ref } = useInfiQry(value);

  if (isLoading) return <div>loading...</div>;
  return (
    <Container>
      <PageTitle title={`'${value}' 검색결과`} />
      <CardContainer>
        {movies?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.results.map((movie: MovieList) => (
              <Card
                key={movie.id}
                id={movie.id}
                imageUrl={
                  'https://image.tmdb.org/t/p/original' + movie.poster_path
                }
                title={movie.title}
                rate={movie.vote_average}
              />
            ))}
          </Fragment>
        ))}
        <button ref={ref} />
      </CardContainer>
    </Container>
  );
}
