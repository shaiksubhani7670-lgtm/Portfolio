import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { UserCheck, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const { about, profile } = portfolioData;

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <UserCheck size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>
            Engineering real-world utility with AI & code.
          </h2>
          <p className="section-desc">
            {about.lead}
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Narrative Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                }}
              >
                {p}
              </p>
            ))}

            {/* Core Values / Philosophy */}
            <div
              style={{
                marginTop: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
              }}
            >
              {about.values.map((val, idx) => (
                <div
                  key={idx}
                  className="card-base"
                  style={{
                    padding: '1.25rem',
                    backgroundColor: '#FFFFFF',
                    borderColor: 'var(--border-light)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-terracotta)',
                      }}
                    />
                    {val.title}
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div
            className="card-base"
            style={{
              padding: '1.75rem',
              backgroundColor: '#FFFFFF',
              position: 'relative',
              overflow: 'hidden',
              borderColor: 'var(--border-light)',
            }}
          >
            {/* Top decorative accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--accent-terracotta), #D97706)',
              }}
            />

            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-serif)',
              }}
            >
              <Compass size={18} style={{ color: 'var(--accent-terracotta)' }} />
              <span>Snapshot at a Glance</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Current Status
                </div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {profile.role}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--accent-blue)', fontWeight: 500 }}>
                  {profile.specialization}
                </div>
              </div>

              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Institution
                </div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  {profile.college}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  {profile.location} • Class of {profile.expectedGraduation}
                </div>
              </div>

              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Primary Technical Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
                  {['Python', 'Flask', 'SQLite', 'JavaScript', 'HTML5 & CSS3'].map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-blue-subtle)',
                  border: '1px solid var(--accent-blue-border)',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Development Focus
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                  Bridging computer vision algorithms with practical web user experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.35fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
