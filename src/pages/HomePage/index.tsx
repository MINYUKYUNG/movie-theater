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
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-kr&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        console.log(results)
        setMovieList([...results]);
      });
  }, []);

  return (
    <>
      <S.Banner src={BANNER} />
      <Container>
        <PageTitle title="WHAT’S POPULAR" />
        <CardContainer>
          {!movieList && <div>Loading...</div>}
          {movieList &&
            movieList.map((movie: MovieList) => {
              return (
                <Card
                  key={movie.id}
                  id={movie.id}
                  imageUrl={
                    'https://image.tmdb.org/t/p/original' + movie.poster_path
                  }
                  title={movie.title}
                  rate={movie.vote_average}
                />
              );
            })}
        </CardContainer>
      </Container>
    </>
  );
}
