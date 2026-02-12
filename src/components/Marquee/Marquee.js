import { siteConfig } from '@/constants/data';
import './Marquee.css';

export default function Marquee() {
  // Create multiple instances for seamless loop
  const marqueeText = Array(10).fill(`${siteConfig.name.toUpperCase()} `).join('');

  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-track">
          <div className="marquee-content">
            {marqueeText}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {marqueeText}
          </div>
        </div>
      </div>
    </section>
  );
}

