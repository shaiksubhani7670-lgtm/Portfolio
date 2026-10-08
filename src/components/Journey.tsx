import React from 'react';
import { portfolioData, JourneyMilestone } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, PlusCircle } from 'lucide-react';

export const Journey: React.FC = () => {
  const { journey } = portfolioData;

  return (
    <section id="journey" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Journey</span>
          </div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>
            Education & Foundation
          </h2>
          <p className="section-desc">
            Formal academic background in artificial intelligence and machine learning.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical connecting line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '2px',
              backgroundColor: 'var(--border-light)',
              zIndex: 0,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
            {journey.map((item: JourneyMilestone, idx: number) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                }}
              >
                {/* Node Marker */}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: '3px solid var(--accent-blue)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    flexShrink: 0,
                  }}
                >
                  <BookOpen size={18} />
                </div>

                {/* Milestone Card */}
                <div
                  className="card-base"
                  style={{
                    flex: 1,
                    padding: '1.75rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-light)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--accent-blue)',
                      }}
                    >
                      <Calendar size={14} />
                      {item.period}
                    </span>

                    {item.highlightBadge && (
                      <span className="badge badge-blue">
                        {item.highlightBadge}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                      marginBottom: '1rem',
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.institution}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={14} style={{ color: 'var(--accent-blue)' }} />
                      {item.location}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Placeholder for future milestones */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                opacity: 0.7,
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '2px dashed var(--border-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  flexShrink: 0,
                }}
              >
                <PlusCircle size={18} />
              </div>
              <div
                style={{
                  flex: 1,
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px dashed var(--border-light)',
                  backgroundColor: '#ffffff',
                }}
              >
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Future Milestones & Professional Roles
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginTop: '0.2rem' }}>
                  Space preserved for upcoming internships, publications, or engineering milestones.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
