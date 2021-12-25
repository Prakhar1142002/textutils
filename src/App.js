import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Main from './Main';
import Homepage from './Homepage';
import Chat from './Chat';
import Profile from './Profile';
import Interest from './Interest';
import NewsAPI from './NewsAPI';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<Aboutus/>} />
        </Routes>
        <Routes>
          <Route path="/homepage" element={<Homepage/>} />
        </Routes>
        <Routes>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        <Routes>
          <Route path="/interest" element={<Interest/>} />
          <Route path="/news" element={<NewsAPI/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
