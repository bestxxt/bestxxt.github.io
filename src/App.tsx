import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PhotoWallPage from './pages/PhotoWallPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="container navbar-container">
            <div className="nav-logo">
              <Link to="/">🛠️ Xintao.</Link>
            </div>
            <div className="nav-links">
              <a href="/#about">About</a>
              <a href="/#projects">Projects</a>
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
