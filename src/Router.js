import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './pages/Main/Main';
import SearchList from './pages/SearchList/SearchList';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';

const Router = props => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
