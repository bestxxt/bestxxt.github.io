import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-cta">
            <h2 className="footer-title">Let's build something cool.</h2>
            <p className="footer-text">Or just grab a coffee. I'm always open to making new friends and discussing tech.</p>
            <a href="mailto:bestxxt@outlook.com" className="btn-primary inverse">Say Hello</a>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-logo">Xintao Xie.</div>
            <div className="social-links">
              <a href="https://github.com/bestxxt" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/xintao-xie/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
