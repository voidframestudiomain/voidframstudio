import { siteConfig } from '@/constants/data';
import './Contact.css';

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">{contact.heading}</h2>
        <div className="contact-content">
          <a href="#" className="contact-cta">
            {contact.cta}
          </a>
          <p className="contact-subtitle">{contact.subtitle}</p>
        </div>
      </div>
      <div className="contact-glow"></div>
    </section>
  );
}

