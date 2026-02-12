import { services, siteConfig } from '@/constants/data';
import './Services.css';

export default function Services() {
  const { services: servicesConfig } = siteConfig;

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-heading">{servicesConfig.heading}</h2>
          <p className="services-description">{servicesConfig.description}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="services-card">
              <div className="services-icon-wrapper">
                <span className="iconify services-icon" data-icon={service.icon}></span>
              </div>
              <h3 className="services-title">{service.title}</h3>
              <p className="services-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

