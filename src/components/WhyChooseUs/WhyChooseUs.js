import { whyChooseUs, siteConfig } from '@/constants/data';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const { whyChooseUs: config } = siteConfig;

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <div className="why-choose-us-grid">
          <div className="why-choose-us-header">
            <h2 className="why-choose-us-heading">{config.heading}</h2>
            <p className="why-choose-us-description">{config.description}</p>
          </div>
          <div className="why-choose-us-features">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="why-choose-us-feature">
                <h4 className="why-choose-us-feature-title">{feature.title}</h4>
                <p className="why-choose-us-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

