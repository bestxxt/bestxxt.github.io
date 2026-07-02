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
              <a href="https://github.com/bestxxt" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/xintao-xie/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
