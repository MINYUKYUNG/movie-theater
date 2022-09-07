import * as S from './style';
import StarIcon from '../../../../assets/svgs/star-icon.svg';
import { useCallback } from 'react';

interface DetailMovie {
  title: string;
  genres: [{ id: number; name: string }];
  release_date: string;
  overview: string;
  runtime: number;
  rate: number;
  languages: [{ english_name: string; iso_639_1: string; name: string }];
  homepage?: string;
}

export default function ExplainContainer({
  title,
  genres,
  release_date,
  overview,
  runtime,
  rate,
  languages,
  homepage,
}: DetailMovie) {
  const transTime = useCallback((time: number) => {
    const hour = Math.floor(time / 60);
    const minute = time % 60;

    if (hour === 0) return minute + '분';
    return hour + '시간 ' + minute + '분';
  }, []);

  const transDate = useCallback((date: string) => {
    const dates = date.split('-');
    return dates[0] + '년 ' + dates[1] + '월 ' + dates[2] + '일';
  }, []);

  return (
    <S.ExplainContainer>
      <S.Title>{title}</S.Title>
      <S.SubTitleContainer>
        {genres.map((genre) => (
          <S.SubTitle key={genre.id}>{genre.name}</S.SubTitle>
        ))}
        <S.SubTitle>{release_date.slice(0, 4)}</S.SubTitle>
      </S.SubTitleContainer>
      <S.OverView>{overview}</S.OverView>
      <S.FurtherContainer>
        <S.FurtherTitle>Runtime</S.FurtherTitle>
        <S.FurtherContent>{transTime(runtime)}</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Released</S.FurtherTitle>
        <S.FurtherContent>{transDate(release_date)}</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Rating</S.FurtherTitle>
        <S.FurtherContent>
          <img src={StarIcon} alt="star_icon" />
          {rate}
        </S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Language</S.FurtherTitle>
        <S.FurtherContent>{languages[0].english_name}</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Homepage</S.FurtherTitle>
        <S.FurtherContent>{homepage}</S.FurtherContent>
      </S.FurtherContainer>
    </S.ExplainContainer>
  );
}
