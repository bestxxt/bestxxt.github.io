import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import PhotoWallPage from './pages/PhotoWallPage';
import Footer from './components/Footer';

function ScrollToHash() {
  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);
  
  return null;
}

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/?scrollTo=${id}`);
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
          <a href="#" onClick={(e) => handleScrollTo('about', e)}>About</a>
          <a href="#" onClick={(e) => handleScrollTo('projects', e)}>Projects</a>
          <Link to="/photos">Photo Wall</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="app-container">
        <Navigation />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<PhotoWallPage />} />
            
            {/* Catch old anchor links and redirect them to the home page with scroll intent */}
            <Route path="/about" element={<Navigate to="/?scrollTo=about" replace />} />
            <Route path="/projects" element={<Navigate to="/?scrollTo=projects" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
