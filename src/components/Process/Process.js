import { processSteps, siteConfig } from '@/constants/data';
import './Process.css';

export default function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <h2 className="process-heading">{process.heading}</h2>

        <div className="process-steps">
          <div className="process-line"></div>
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className={`process-number ${step.active ? 'active' : ''}`}>
                {step.number}
              </div>
              <h4 className="process-step-title">{step.title}</h4>
              <p className="process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

