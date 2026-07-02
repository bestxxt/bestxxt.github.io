import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PhotoWallPage from './pages/PhotoWallPage';
import Footer from './components/Footer';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="nav-logo">
          <Link to="/">🛠️ Xintao.</Link>
        </div>
        <div className="nav-links">
          <a href="#about" onClick={(e) => handleScrollTo('about', e)}>About</a>
          <a href="#projects" onClick={(e) => handleScrollTo('projects', e)}>Projects</a>
          <Link to="/photos">Photo Wall</Link>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />

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
