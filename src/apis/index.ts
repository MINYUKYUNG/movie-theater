import axios from 'axios';

export const apiRoot = axios.create({
  method: 'get',
  baseURL: process.env.REACT_APP_API_URL,
  params: { api_key: process.env.REACT_APP_API_KEY, language: 'ko-kr' },
});

// 모든 res요청은 다음과 같이 응답됩니다.
// {
//     "page": 1,
//     "results": [
//         {
//             "adult": false,
//             "backdrop_path": "/8rft8A9nH43IReybFtYt21ezfMK.jpg",
//             "genre_ids": [
//                 99
//             ],
//             "id": 899082,
//             "original_language": "en",
//             "original_title": "Harry Potter 20th Anniversary: Return to Hogwarts",
//             "overview": "‘해리포터와 마법사의 돌' 20주년 기념 스페셜. 다니엘 래드클리프, 루퍼트 그린트, 엠마 왓슨을 포함한 캐스트, 감독들이 재결합해 해리포터 프랜차이즈의 첫 영화를 회고하고, 축하하는 시간을 가진다.  '해리포터 20주년 기념: 리턴 투 호그와트'는 심층 인터뷰와 출연진 토크를 통해 역대 가장 사랑 받았던, 마법 같은 프랜차이즈의 세계로 팬들을 초대한다.  헬레나 본햄 카터, 로비 콜트레인, 랄프 파인즈, 제이슨 아이삭스, 게리 올드만, 톰 펠튼, 제임스 펠프스, 올리버 펠프스, 마크 윌리엄스, 보니 라이트, 알프레드 에녹, 매튜 루이스, 이반나 린치를 포함한 다양한 캐스트들이 함께 한다.",
//             "popularity": 138.972,
//             "poster_path": "/mJYDpb6fRIzwgG0csBJp3zjNSSV.jpg",
//             "release_date": "2022-01-01",
//             "title": "해리 포터 20주년: 리턴 투 호그와트",
//             "video": false,
//             "vote_average": 7.5,
//             "vote_count": 1952
//         }
//     ],
//     "total_pages": 1,
//     "total_results": 1
// }

// @HTTP: GET
// How To use
// 1. import getPopular
// 2. insert getPopular(your page Parameter)
// 3. example) getPopular(1) -> get popular movie list, not use res.json() just setState(res.results)
export const getPopular = async (pageNumber: number) => {
  try {
    const response = await apiRoot(`/movie/popular`, {
      params: { page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

// @HTTP: GET
// How To use
// 1. import getPlaying
// 2. insert getPlaying(your page Parameter)
// 3. example) getPlaying(1) -> get now playing movie list, not use res.json() just setState(res.results)
export const getPlaying = async (pageNumber: number) => {
  try {
    const response = await apiRoot(`/movie/now_playing`, {
      params: { page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

// @HTTP: GET
// How To use
// 1. import getUpcoming
// 2. insert getUpcoming(your page Parameter)
// 3. example) getUpcoming(1) -> get upcoming movie list, not use res.json() just setState(res.results)
export const getUpcoming = async (pageNumber: number) => {
  try {
    const response = await apiRoot(`/movie/upcoming`, {
      params: { page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

// @HTTP: GET
// How To use
// 1. import getTopRated
// 2. insert getTopRated(your page Parameter)
// 3. example) getTopRated(1) -> get top rated movie list, not use res.json() just setState(res.results)
export const getTopRated = async (pageNumber: number) => {
  try {
    const response = await apiRoot(`/movie/top_rated`, {
      params: { page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

// @HTTP: GET
// How To use
// 1. import getMovieDetail
// 2. insert getMovieDetail(want movie id)
// 3. example) getMovieDetail(55) -> get movie detail, not use res.json() just setState(res.results)
export const getMovieDetail = async (movieId: number) => {
  try {
    const response = await apiRoot(`/movie/${movieId}`);
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};

// @HTTP: GET
// How To use
// 1. import getSearch
// 2. insert getSearch(your search input, page parameter)
// 3. example) getSearch(harry,1) -> get search movie list, not use res.json() just setState(res.results)
export const getSearch = async (searchInput: string, pageNumber: number) => {
  try {
    const response = await apiRoot(`/search/movie`, {
      params: { query: searchInput, page: pageNumber },
    });
    return response.data;
  } catch (err) {
    throw new Error('not found page');
  }
};
