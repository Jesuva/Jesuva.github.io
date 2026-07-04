import { profile } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__row">
        <span>
          © {year} <strong>{profile.name}</strong>
        </span>
        <span>crafted with code and curiosity</span>
      </div>
    </footer>
  );
}
