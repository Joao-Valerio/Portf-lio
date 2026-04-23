import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          JV
          <span className="logo-bracket">/&gt;</span>
        </a>

        <p className="footer-copy">
          &copy; {year} João Valério Santana — Construído com React
        </p>

        <div className="footer-links">
          <a href="https://github.com/Joao-Valerio" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/joão-valério/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:joaovalerio2359@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
