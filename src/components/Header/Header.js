'use client';

import { useState, useEffect } from 'react';
import { navLinks, siteConfig } from '@/constants/data';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          setIsMenuOpen(false);
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <nav className="header-nav">
      <div className="header-container">
        <a href="#" className="header-logo">
          <img 
            src={siteConfig.logo} 
            alt={siteConfig.name}
            className="header-logo-img"
          />
          <span className="header-logo-text">{siteConfig.name}</span>
        </a>

        <div className={`header-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="header-actions">
          <a href="#contact" className="header-cta">
            Book a Call
          </a>
          <button
            className="header-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="iconify" data-icon="lucide:menu"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
