import { whatWeDoServices, siteConfig } from '@/constants/data';
import './WhatWeDo.css';

export default function WhatWeDo() {
  const { whatWeDo } = siteConfig;

  return (
    <section id="about" className="what-we-do-section">
      <div className="what-we-do-container">
        <div className="what-we-do-header">
          <div className="what-we-do-badge">
            <span className="iconify what-we-do-badge-icon" data-icon="lucide:zap"></span>
            <span>Our Expertise</span>
          </div>
          <h2 className="what-we-do-heading">{whatWeDo.heading}</h2>
          <h3 className="what-we-do-subheading">{whatWeDo.subheading}</h3>
          <p className="what-we-do-description">{whatWeDo.description}</p>
        </div>

        <div className="what-we-do-grid">
          {whatWeDoServices.map((service, index) => (
            <div key={index} className="what-we-do-card">
              <div className="what-we-do-card-header">
                <div className="what-we-do-icon-wrapper">
                  <span className="iconify what-we-do-icon" data-icon={service.icon}></span>
                </div>
                <h4 className="what-we-do-card-title">{service.title}</h4>
              </div>
              <p className="what-we-do-card-description">{service.description}</p>
              <div className="what-we-do-card-benefit">
                <span className="iconify what-we-do-benefit-icon" data-icon="lucide:arrow-right"></span>
                <span className="what-we-do-benefit-text">{service.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="what-we-do-cta">
          <p className="what-we-do-cta-text">Ready to transform your brand?</p>
          <a href="#contact" className="what-we-do-cta-button">
            Let's Talk About Your Project
            <span className="iconify what-we-do-cta-icon" data-icon="lucide:arrow-right"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

