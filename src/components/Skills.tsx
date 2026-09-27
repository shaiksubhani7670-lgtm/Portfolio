import React from 'react';
import { portfolioData, SkillCategory } from '../data/portfolioData';
import { CheckCircle2, Terminal, Layers, Database, ShieldCheck } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  const categoryIcons = [Terminal, Layers, Database, ShieldCheck];

  return (
    <section id="skills" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <CheckCircle2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & Working Technologies
          </h2>
          <p className="section-desc">
            Verified technologies and tools I utilize for software engineering, web interfaces, and AI prototypes.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {skillCategories.map((cat: SkillCategory, idx: number) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={cat.category}
                className="card-base"
                style={{
                  padding: '1.75rem',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div
                      style={{
                        width: '2.25rem',
                        height: '2.25rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--accent-blue-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-blue)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {cat.category}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-tertiary)',
                      lineHeight: 1.5,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {cat.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.skills.map((skill: string) => (
                    <span
                      key={skill}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.4rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        transition: 'all var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-blue-subtle)';
                        e.currentTarget.style.borderColor = 'var(--accent-blue-border)';
                        e.currentTarget.style.color = 'var(--accent-blue)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                        e.currentTarget.style.borderColor = 'var(--border-light)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-blue)',
                        }}
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Note on Skills */}
        <div
          style={{
            padding: '1rem 1.5rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <strong>Authentic Skills Presentation:</strong> Skills listed are confirmed through practical implementation, coursework, and live software artifacts. No artificial progress bars or arbitrary scores.
          </div>
          <div className="badge badge-emerald">
            ✓ Confirmed Toolkit
          </div>
        </div>
      </div>
    </section>
  );
};
