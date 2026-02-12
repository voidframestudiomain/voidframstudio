import { siteConfig } from '@/constants/data';
import './Hero.css';

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">{hero.badge}</span>
          </div>

          <h1 className="hero-heading">{hero.heading}</h1>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-cta-group">
            <a href="#contact" className="hero-cta-primary">
              {hero.ctaPrimary}
            </a>
            <a href="#work" className="hero-cta-secondary">
              {hero.ctaSecondary}
            </a>
          </div>

          <div className="hero-features">
            {hero.features.map((feature, index) => (
              <div key={index} className="hero-feature">
                <span className="iconify hero-feature-icon" data-icon="lucide:check"></span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-cards">
            <div className="hero-glow"></div>

            <div className="hero-card hero-card-back"></div>

            <div className="hero-card hero-card-middle">
              <div className="hero-card-content">
                <div className="hero-card-placeholder hero-card-placeholder-large"></div>
                <div className="hero-card-placeholder hero-card-placeholder-medium"></div>
                <div className="hero-card-placeholder hero-card-placeholder-small"></div>
              </div>
            </div>

            <div className="hero-card hero-card-front glass-card">
              <div className="hero-card-content">
                <div className="hero-card-header">
                  <div className="hero-card-avatar"></div>
                  <div className="hero-card-menu"></div>
                </div>
                <div className="hero-card-body">
                  <div className="hero-card-growth-widget">
                    <div className="hero-growth-header">
                      <div className="hero-growth-label">Growth Metrics</div>
                      <div className="hero-growth-badge">
                        <span className="hero-growth-badge-value">+245%</span>
                        <span className="hero-growth-badge-pulse"></span>
                      </div>
                    </div>
                    <div className="hero-growth-stats">
                      <div className="hero-growth-stat">
                        <div className="hero-growth-stat-value">1.2M</div>
                        <div className="hero-growth-stat-label">Reach</div>
                      </div>
                      <div className="hero-growth-stat">
                        <div className="hero-growth-stat-value">4.2x</div>
                        <div className="hero-growth-stat-label">ROI</div>
                      </div>
                    </div>
                    <div className="hero-growth-chart">
                      <div className="hero-growth-bar" style={{ '--growth': '85%' }}></div>
                      <div className="hero-growth-bar" style={{ '--growth': '92%' }}></div>
                      <div className="hero-growth-bar" style={{ '--growth': '78%' }}></div>
                      <div className="hero-growth-bar" style={{ '--growth': '95%' }}></div>
                      <div className="hero-growth-bar" style={{ '--growth': '88%' }}></div>
                      <div className="hero-growth-bar" style={{ '--growth': '100%' }}></div>
                    </div>
                    <div className="hero-growth-trend">
                      <span className="iconify hero-growth-trend-icon" data-icon="lucide:trending-up"></span>
                      <span className="hero-growth-trend-text">Steady Growth</span>
                      <div className="hero-growth-sparkles">
                        <span className="hero-sparkle"></span>
                        <span className="hero-sparkle"></span>
                        <span className="hero-sparkle"></span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-card-text-group">
                    <div className="hero-card-text-line"></div>
                    <div className="hero-card-text-line hero-card-text-line-short"></div>
                  </div>
                </div>
                <div className="hero-card-footer">
                  <div className="hero-card-button"></div>
                  <div className="hero-card-icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

