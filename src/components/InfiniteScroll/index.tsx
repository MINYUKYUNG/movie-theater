import { Card, CardContainer } from '@components/index';
import { useEffect, useState, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import Triangle from '../../assets/svgs/ball-triangle.svg';
import { FaChevronCircleUp } from 'react-icons/fa';
import * as S from './style';

interface MovieList {
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
  key: number;
}

export default function InfiniteScroll({ callApi }) {
  const scroll = useRef();
  const [loading, setLoading] = useState(true);

  const { data, error, fetchNextPage } = useInfiniteQuery(['posts', `${callApi}`], ({ pageParam = 1 }) => callApi(pageParam), {
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        fetchNextPage();
      }
    })
  })

  useEffect(() => {
    console.log(data);
    scroll.current && io.observe(scroll.current);
  }, [data]);

  if (!data) return <div>loading...</div>
  if (error) return <div>failed to load</div>

  const result = data.pages.map((page) => {
    return page.results.map((movie: MovieList) => {
      return (
        <Card
          key={movie.id}
          id={movie.id}
          onLoad={() => setLoading(false)}
          imageUrl={
            loading ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : ''
          }
          title={movie.title}
          rate={movie.vote_average}
        />
      )
    });
  });

  const goUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.ScrollBox>
      <CardContainer>
        {result}
      </CardContainer>
      <S.TriangleBox ref={scroll}>
        <S.TriangleImg src={Triangle} alt="Triangle" />
      </S.TriangleBox>
      <S.ScrollTopBtn onClick={goUp}><FaChevronCircleUp /></S.ScrollTopBtn>
    </S.ScrollBox>
  );
}
