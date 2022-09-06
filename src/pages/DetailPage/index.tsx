import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@components/index';
import { Card, ExplainContainer, DetailContainer } from './components';
import ReactPlayer from 'react-player/lazy';

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
}

const YOUTUBE_URL = 'https://youtu.be/dHrI-_xq1Vo';
export default function DetailPage() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-kr`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, []);

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
              overview={movie.overview}
              runtime={movie.runtime}
              rate={movie.vote_average}
              languages={movie.spoken_languages}
              homepage={movie.homepage}
            />
          </DetailContainer>
          <ReactPlayer
            url={YOUTUBE_URL}
            width="100%"
            height="400px"
            playing={true}
            muted={true}
            controls={true}
          />
        </>
      )}
    </Container>
  );
}
