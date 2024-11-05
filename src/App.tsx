import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DownloadPage from './pages/DownloadPage';
import LandingPage from './pages/LandingPage';
import UpdatePostFullPage from './pages/UpdatePostFullPage';
import { TopNav } from './components/TopNav/TopNav';
import ScrollToTopButton from './components/TopNav/ScrollToTopButton';

function App() {
  return (
    <div
      className="App flex flex-col h-dvh min-h-screen"
      style={{
        backgroundImage: 'url(/snall.jpg)'
      }}
    >
      <Router>
        <TopNav />
        <ScrollToTopButton />
        <div className="content-container h-full mt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/post/:id" element={<UpdatePostFullPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
