import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Court from './pages/Court';
import Calendar from './pages/Calendar';
import Mypage from './pages/Mypage';
import NotFound from './pages/NotFound';

import Nav from './components/Nav';

import './App.css';

function App() {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      {isLoggedIn? <Nav /> : null}
      <Routes>
        <Route path="/" element={isLoggedIn? <Home /> : <Landing />} />
        {/* <Route path="/signin" element={} />
        <Route path="/singup" element={} /> */}
        <Route path="/court" element={<Court />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
