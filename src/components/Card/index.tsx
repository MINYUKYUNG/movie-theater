import { useNavigate } from 'react-router-dom';
import NO_IMAGE from '../../assets/no_image.png';
import * as S from './style';
import StarIcon from '../../assets/svgs/star-icon.svg';

interface Movie {
  title: string;
  imageUrl?: string;
  rate: number;
  id: number;
}

export default function Card({ title, imageUrl, rate, id }: Movie) {
  const navigate = useNavigate();
  const url = imageUrl === undefined ? NO_IMAGE : imageUrl;
  return (
    <S.Card>
      <S.Poster
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        src={url}
      />
      <S.Title>{title}</S.Title>
      <S.RateContainer>
        <img src={StarIcon} alt="star_icon" />
        <S.Rate>{rate}</S.Rate>
      </S.RateContainer>
    </S.Card>
  );
}
