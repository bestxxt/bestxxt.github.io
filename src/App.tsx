import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PhotoWallPage from './pages/PhotoWallPage';
import Footer from './components/Footer';

function App() {
  const handleScrollTo = (id: string, e: any) => {
    e.preventDefault();
    if (window.location.hash.includes('/photos')) {
      window.location.hash = '#/';
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="container navbar-container">
            <div className="nav-logo">
              <Link to="/">🛠️ Xintao.</Link>
            </div>
            <div className="nav-links">
              <a href="#" onClick={(e) => handleScrollTo('about', e)}>About</a>
              <a href="#" onClick={(e) => handleScrollTo('projects', e)}>Projects</a>
              <Link to="/photos">Photo Wall</Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<PhotoWallPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
