import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DownloadPage from './pages/DownloadPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div
      className="App flex flex-col h-screen"
      style={{
        backgroundImage: 'url(/background-black.jpg)'
      }}
    >
      <Router>
        <header className="website-header">
          <div className="text-white text-center">Logo</div>
          <nav className="page-navigation flex">
            <Link className="ml-auto" to="/">
              <button
                className="rounded-xl w-36 h-16 bg-gradient-to-b from-gray-500 via-gray-50 to-gray-500 text-white"
                style={{
                  backgroundImage: 'url(/button-black-lighter.png)',
                  backgroundSize: '150px 75px'
                }}
              >
                <div className="rounded-xl text-white hover-color bg-white bg-opacity-0 hover:bg-opacity-10 h-full pt-4">
                  Home
                </div>
              </button>
            </Link>
            <Link className="mr-auto" to="/download">
              <button
                className="rounded-xl w-36 h-16 bg-gradient-to-b from-gray-500 via-gray-50 to-gray-500 text-white"
                style={{
                  backgroundImage: 'url(/button-black-lighter.png)',
                  backgroundSize: '150px 75px'
                }}
              >
                <div className="rounded-xl text-white hover-color bg-white bg-opacity-0 hover:bg-opacity-10 h-full pt-4">
                  Download
                </div>
              </button>
            </Link>
          </nav>
        </header>
        <div className="content-container h-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
