import { caseStudies, siteConfig } from '@/constants/data';
import './Work.css';

export default function Work() {
  const { work } = siteConfig;

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="work-header">
          <div>
            <h2 className="work-heading">{work.heading}</h2>
            <p className="work-description">{work.description}</p>
          </div>
          <a href="#" className="work-view-all">
            View all projects
            <span className="iconify work-view-all-icon" data-icon="lucide:arrow-right"></span>
          </a>
        </div>

        <div className="work-list">
          {caseStudies.map((study, index) => (
            <div key={index} className={`work-item ${study.reverse ? 'reverse' : ''}`}>
              <div className="work-image">
                <div className="work-image-placeholder"></div>
              </div>
              <div className="work-content">
                <div className="work-category">{study.category}</div>
                <h3 className="work-title">{study.title}</h3>
                <p className="work-text">{study.description}</p>
                <div className="work-metrics">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      {/* {metricIndex > 0 && <div className="work-metrics-divider"></div>} */}
                      <div className="work-metric">
                        <div className="work-metric-value">{metric.value}</div>
                        <div className="work-metric-label">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="work-cta">View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

