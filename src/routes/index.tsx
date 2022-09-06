import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@pages/Main';
import Layout from '@components/commons/layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
