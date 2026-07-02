import './Hero.css';
import TechBackground from './TechBackground';

const Hero = () => {
  return (
    <section className="hero-section bg-black">
      <TechBackground />
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            👋 Hi, I'm Xintao Xie.
          </h1>
          <h2 className="hero-tags stagger-1">
            Full Stack Explorer <span className="separator">|</span> Hardware Enthusiast <span className="separator">|</span> Vibe Coding
          </h2>
          <p className="hero-vibe stagger-2">
            I'm an engineering student at the University of Toronto who really enjoys solving hard problems at the intersection of software, AI, and robotics.
          </p>
          <div className="hero-cta stagger-3">
            <a href="#projects" className="btn-primary" style={{ marginRight: '1rem' }}>See My Work</a>
            <a href="/photos" className="btn-outline">My Photo Wall</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
