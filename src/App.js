import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/FAQ';
import TalkPage from './components/TalkPage/TalkPage'
// import Speakers from './pages/Speakers';
// import Talks from './pages/Talks';
import Blogs from './components/Blogs/Blogs';
// import Sponsors from './pages/Sponsors';
import Team from './components/Team/Team';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className='App'>
        <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
        <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/speakers" element={<Speakers />} /> */}
            <Route path="/blogs" element={<Blogs />} />
            {/* <Route path="/sponsors" element={<Sponsors />} /> */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<Team />} />
            <Route path="/talks" element={<TalkPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;