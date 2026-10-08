import React from 'react';
import { portfolioData, FocusArea } from '../data/portfolioData';
import { Brain, Code2, Layout, Lightbulb, Info } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Code2: Code2,
  Layout: Layout,
  Lightbulb: Lightbulb,
};

export const FocusAreas: React.FC = () => {
  const { focusAreas } = portfolioData;

  return (
    <section id="focus-areas" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Brain size={14} />
            <span>Focus Areas</span>
          </div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>
            Areas of Exploration & Applied Interest
          </h2>
          <p className="section-desc">
            Technical domains I actively study, experiment with, and translate into practical student projects.
          </p>
        </div>

        {/* Areas Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {focusAreas.map((area: FocusArea) => {
            const Icon = iconMap[area.iconName] || Brain;
            return (
              <div
                key={area.id}
                className="card-base"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                }}
              >
                <div>
                  {/* Icon */}
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-blue-subtle)',
                      border: '1px solid var(--accent-blue-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {area.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {area.description}
                  </p>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarification banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-xs)',
          }}
        >
          <Info size={18} style={{ color: 'var(--accent-blue)', marginTop: '2px', flexShrink: 0 }} />
          <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--text-secondary)' }}>Note on experience:</strong> These focus areas reflect my academic coursework, independent self-guided study, and project prototyping as an undergraduate student, rather than multi-year enterprise employment claims.
          </p>
        </div>
      </div>
    </section>
  );
};
