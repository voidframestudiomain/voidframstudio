import { growthMetrics, siteConfig } from '@/constants/data';
import './GrowthResults.css';

export default function GrowthResults() {
  const { growthResults } = siteConfig;

  return (
    <section id="growth-results" className="growth-results-section hide">
      <div className="growth-results-container">
        <div className="growth-results-header">
          <h2 className="growth-results-heading">{growthResults.heading}</h2>
          <p className="growth-results-description">{growthResults.description}</p>
        </div>

        <div className="growth-results-grid">
          {growthMetrics.map((metric, index) => (
            <div key={index} className="growth-metric-card">
              <div className="growth-metric-icon-wrapper">
                <span className="iconify growth-metric-icon" data-icon={metric.icon}></span>
              </div>
              <div className="growth-metric-content">
                <div className="growth-metric-value">{metric.value}</div>
                <div className="growth-metric-label">{metric.label}</div>
                <div className="growth-metric-description">{metric.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

