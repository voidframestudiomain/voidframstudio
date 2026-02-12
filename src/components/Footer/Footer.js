import { siteConfig, footerLinks, socialLinks } from '@/constants/data';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <a href="#" className="footer-logo-link">
              <img 
                src={siteConfig.logo} 
                alt={siteConfig.name}
                className="footer-logo-img"
              />
              <span className="footer-logo-text">{siteConfig.name}</span>
            </a>
            <p className="footer-tagline">{siteConfig.tagline}</p>
          </div>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="footer-social-link"
                aria-label={social.icon}
              >
                <span className="iconify" data-icon={social.icon}></span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} VoidFrame Agency. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
