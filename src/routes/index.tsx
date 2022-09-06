import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  NowPlayingPage,
  UpComingPage,
  TopRatedPage,
  SearchMoviePage,
  DetailPage,
} from '@pages/index';
import styled from 'styled-components';
import Layout from '@components/commons/layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/now_playing" element={<NowPlayingPage />} />
          <Route path="/up_coming" element={<UpComingPage />} />
          <Route path="/top_rated" element={<TopRatedPage />} />
          <Route path="/search_movie" element={<SearchMoviePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Contents = styled.div`
  background: #181818;
  width: 100%;
  overflow: scroll;
`;
