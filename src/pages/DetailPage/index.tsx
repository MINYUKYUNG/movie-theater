import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@components/index';
import { Card, ExplainContainer, DetailContainer } from './components';
import ReactPlayer from 'react-player/lazy';
import { getMovieDetail, getMovieDetailVideos } from '@apis/index';
import * as S from './style';

interface Movie {
  title: string;
  genres: [{ id: number; name: string }];
  release_date: string;
  overview: string;
  runtime: number;
  vote_average: number;
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  homepage?: string;
  poster_path: string;
  tagline?: string;
  popularity: number;
}

export default function DetailPage() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieVideos, setMovieVideos] = useState();

  const { id } = useParams();
  useEffect(() => {
    const getMovieDetails = async () => {
      const result = await getMovieDetail(Number(id));
      setMovie(result);
      console.log(result);
    };

    const getMovieVideos = async () => {
      const result = await getMovieDetailVideos(Number(id));
      setMovieVideos(result);
      console.log(result);
    };

    getMovieVideos();
    getMovieDetails();
  }, [id]);

  return (
    <Container>
      {!movie && <div>Loading...</div>}
      {movie && (
        <>
          <DetailContainer>
            <Card
              imageUrl={
                'https://image.tmdb.org/t/p/original' + movie.poster_path
              }
            />
            <ExplainContainer
              title={movie.title}
              genres={movie.genres}
              release_date={movie.release_date}
              runtime={movie.runtime}
              rate={movie.vote_average}
              languages={movie.spoken_languages}
              homepage={movie.homepage}
              tagline={movie.tagline}
              popularity={movie.popularity}
            />
          </DetailContainer>
          <S.OverViewText>{movie.overview}</S.OverViewText>`
          {movieVideos?.results.length > 0 ? (
            <ReactPlayer
              url={`https://www.youtube.com/embed/${movieVideos?.results[0].key}`}
              width="100%"
              height="400px"
              playing={true}
              muted={true}
              controls={true}
            />
          ) : (
            <S.NoMovieComment>트레일러가 없습니다.</S.NoMovieComment>
          )}
        </>
      )}
    </Container>
  );
}
