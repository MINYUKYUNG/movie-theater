import { getPopular } from '@apis/index';
import { Card, CardContainer, Container, PageTitle } from '@components/index';
import { useEffect, useState } from 'react';
import BANNER from '../../assets/banner.png';
import * as S from './style';

interface MovieList {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
}

export default function Homepage() {
  const [movieList, setMovieList] = useState<MovieList[] | []>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getPopular(pageNumber).then((res) => setMovieList(res.results));
  }, []);

  return (
    <>
      <S.Banner src={BANNER} />
      <Container>
        <PageTitle title="WHAT’S POPULAR" />
        <CardContainer>
          {!movieList && <div>Loading...</div>}
          {movieList?.map((movie) => (
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
        </CardContainer>
      </Container>
    </>
  );
}
