import { Link } from 'react-router-dom';
import './Hero.css';

const heroIcons = Array.from({ length: 25 }, (_, i) => i + 1);

// Generate scattered positions around the perimeter, avoiding the center
const iconPositions = [
  // Left side
  { x: 5, y: 10 }, { x: 12, y: 28 }, { x: 4, y: 45 }, { x: 10, y: 65 }, { x: 6, y: 85 },
  // Right side
  { x: 92, y: 12 }, { x: 88, y: 30 }, { x: 95, y: 50 }, { x: 85, y: 68 }, { x: 94, y: 88 },
  // Top side
  { x: 25, y: 8 }, { x: 38, y: 15 }, { x: 50, y: 6 }, { x: 65, y: 12 }, { x: 78, y: 5 },
  // Bottom side
  { x: 22, y: 92 }, { x: 35, y: 85 }, { x: 50, y: 95 }, { x: 62, y: 88 }, { x: 75, y: 94 },
  // Extra scattered filler (corners & edges)
  { x: 15, y: 95 }, { x: 85, y: 95 }, { x: 18, y: 5 }, { x: 82, y: 22 }, { x: 98, y: 75 }
];

const getIconStyle = (index: number) => {
  const pos = iconPositions[index % 25];
  
  // Pseudo-random size
  const size = 50 + (index * 13) % 40; // 50px - 90px
  
  // Fly-in start positions (from outside the screen, based on closest edge)
  const startX = pos.x < 30 ? '-100vw' : pos.x > 70 ? '100vw' : '0';
  const startY = pos.y < 30 ? '-100vh' : pos.y > 70 ? '100vh' : (pos.x === 50 ? '-100vh' : '0');
  const startRot = `${(index * 45) % 360}deg`;

  return {
    left: `${pos.x}%`,
    top: `${pos.y}%`,
    width: `${size}px`,
    height: `${size}px`,
    '--start-x': startX,
    '--start-y': startY,
    '--start-rot': startRot,
    animationDelay: `${(index * 0.05) % 1}s` // staggered fly-in
  } as React.CSSProperties;
};

const Hero = () => {
  return (
    <section className="hero-section bg-paper">
      <div className="hero-background-icons">
        {heroIcons.map((i) => (
          <div 
            key={i} 
            className="hero-icon-wrapper"
            style={getIconStyle(i - 1)}
          >
            <img 
              src={`/img/hero-icons/hero-icon-${i}.png`} 
              className="hero-floating-icon"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Hi, I'm <span style={{ whiteSpace: 'nowrap' }}>Xintao Xie.</span>
          </h1>
          <h2 className="hero-tags stagger-1">
            <span className="mono-tag tag-box">Full Stack Explorer</span>
            <span className="mono-tag tag-box">Hardware Enthusiast</span>
            <span className="mono-tag tag-box">Vibe Coding</span>
            <span className="mono-tag tag-box">AI Researcher</span>
          </h2>
          <p className="hero-vibe stagger-2">
            I'm an engineering student at the University of Toronto who really enjoys solving hard problems at the intersection of software, AI, and robotics.
          </p>
          <div className="hero-cta stagger-3">
            <a href="#projects" className="btn-primary" style={{ marginRight: '1.5rem' }}>See My Work</a>
            <Link to="/photos" className="btn-outline">My Photo Wall</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
