import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SearchList from './pages/SearchList/SearchList';
import Detail from './pages/Detail/Detail';

const Router = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
