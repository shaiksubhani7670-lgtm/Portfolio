import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-light)',
        padding: '3rem 0 2rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.35rem' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-terracotta)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                }}
              >
                SS
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {profile.name}
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', margin: 0 }}>
              Final-Year B.Tech Student (AI & ML) • Geethanjali Institute of Science and Technology
            </p>
          </div>

          {/* Quick Nav Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
            }}
          >
            <a href="#about" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>About</a>
            <a href="#focus-areas" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Focus</a>
            <a href="#skills" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Skills</a>
            <a href="#projects" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Projects</a>
            <a href="#journey" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Journey</a>
            <a href="#contact" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Contact</a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            aria-label="Back to top"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--text-tertiary)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Shaik Subhani. All rights reserved. Built with React & TypeScript.
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: 'var(--text-tertiary)', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: 'var(--text-tertiary)', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              style={{ color: 'var(--text-tertiary)', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
