import { trustedBrands } from '@/constants/data';
import './TrustedBy.css';

export default function TrustedBy() {
  return (
    <section className="trusted-by-section hide">
      <div className="trusted-by-container">
        <p className="trusted-by-label">Trusted by founders and fast-growing brands</p>
        <div className="trusted-by-brands">
          {trustedBrands.map((brand, index) => (
            <div key={index} className="trusted-by-brand">
              <span className="iconify" data-icon={brand.icon}></span>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

