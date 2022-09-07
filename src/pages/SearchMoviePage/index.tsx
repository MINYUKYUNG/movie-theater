import { Card, CardContainer, Container, PageTitle } from '@components/index';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearch } from '@apis/index';

interface MovieList {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
}

export default function SearchMoviePage() {
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const location = useLocation();
  const { value } = location.state as { value: string };

  useEffect(() => {
    getSearch(value, 1).then((res) => setMovieList(res.results));
  }, [location.key, value]);

  return (
    <Container>
      <PageTitle title={`'${value}' 검색결과`} />
      <CardContainer>
        {!movieList && <div>Loading...</div>}
        {movieList?.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            imageUrl={'https://image.tmdb.org/t/p/original' + movie.poster_path}
            title={movie.title}
            rate={movie.vote_average}
          />
        ))}
      </CardContainer>
    </Container>
  );
}
