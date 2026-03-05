'use client';

import { siteConfig } from '@/constants/data';
import './Contact.css';

export default function Contact() {
  const { contact } = siteConfig;
  const phoneNumber = '+91 7986438937';
  const phoneNumberLink = '+917986438937';
  const email = 'mridul2431@gmail.com';
  const whatsappNumber = '917986438937'; // WhatsApp format: country code + number without +

  const handleCall = () => {
    window.location.href = `tel:${phoneNumberLink}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}?subject=Inquiry from VoidFrame Website`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your services.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-layout">
          <div className="contact-left-column">
            <div className="contact-info-card" onClick={handleCall}>
              <span className="iconify contact-info-icon" data-icon="lucide:phone"></span>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Call Us</h3>
                <p className="contact-info-value">{phoneNumber}</p>
              </div>
            </div>

            <div className="contact-info-card" onClick={handleEmail}>
              <span className="iconify contact-info-icon" data-icon="lucide:mail"></span>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Email Us</h3>
                <p className="contact-info-value">{email}</p>
              </div>
            </div>

            <div className="contact-info-card contact-info-card-whatsapp" onClick={handleWhatsApp}>
              <span className="iconify contact-info-icon" data-icon="mdi:whatsapp"></span>
              <div className="contact-info-content">
                <h3 className="contact-info-title">WhatsApp</h3>
                <p className="contact-info-value">Message us directly</p>
              </div>
            </div>
          </div>

          <div className="contact-right-column">
            <div className="contact-cta-card">
              <h2 className="contact-cta-heading">Book a Strategy Call</h2>
              <p className="contact-cta-description">{contact.subtitle}</p>
              <a href={`tel:${phoneNumberLink}`} className="contact-cta-primary">
                <span className="iconify contact-cta-icon" data-icon="lucide:phone"></span>
                {contact.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

