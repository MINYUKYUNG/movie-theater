import * as S from './style';

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
  return (
    <S.ExplainContainer>
      <S.Title>{title}</S.Title>
      <S.SubTitleContainer>
        {genres.map((genre) => (
          <S.SubTitle key={genre.id}>{genre.name}</S.SubTitle>
        ))}
        <S.SubTitle>{release_date}</S.SubTitle>
      </S.SubTitleContainer>
      <S.OverView>{overview}</S.OverView>
      <S.FurtherContainer>
        <S.FurtherTitle>Runtime</S.FurtherTitle>
        <S.FurtherContent>{runtime}</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Released</S.FurtherTitle>
        <S.FurtherContent>{release_date}</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Rating</S.FurtherTitle>
        <S.FurtherContent>{rate}</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Language</S.FurtherTitle>
        {/* {languages.map((language, i) => (
          <S.FurtherContent key={i}>{language.english_name}</S.FurtherContent>
        ))} */}
        <S.FurtherContent>{languages[0].english_name}</S.FurtherContent>
      </S.FurtherContainer>
      <S.FurtherContainer>
        <S.FurtherTitle>Hompage</S.FurtherTitle>
        <S.FurtherContent>{homepage}</S.FurtherContent>
      </S.FurtherContainer>
    </S.ExplainContainer>
  );
}
