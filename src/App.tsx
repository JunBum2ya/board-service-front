import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/auth/LoginPage';
import JoinPage from './pages/auth/JoinPage';
import BoardListPage from './pages/board/BoardListPage';

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<MainPage />} />
      <Route path={`/auth/login`} element={<LoginPage />} />
      <Route path={`/auth/join`} element={<JoinPage />} />
      <Route path={`/board`} element={<BoardListPage/>}/>
    </Routes>
  );
}

export default App;
