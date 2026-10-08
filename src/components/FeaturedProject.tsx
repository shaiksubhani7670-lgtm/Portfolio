import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Sparkles, Check, Upload, CheckCircle, ArrowRight, Cpu } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const { featuredProject } = portfolioData;
  const [activeStep, setActiveStep] = useState(0);

  const stepDetails = [
    {
      title: 'Report Lost or Found Item',
      previewTitle: 'Step 1: Item Submission',
      previewContent: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span style={{ padding: '0.25rem 0.6rem', borderRadius: '4px', backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '0.75rem', fontWeight: 600 }}>Type: Lost Item</span>
            <span style={{ padding: '0.25rem 0.6rem', borderRadius: '4px', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: 500 }}>Location: Central Library</span>
          </div>
          <div style={{ padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0f172a' }}>Item: Casio fx-991ES Calculator</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>Left in reading hall table #14 during afternoon study session.</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>
            <CheckCircle size={14} /> Item recorded in SQLite database
          </div>
        </div>
      ),
    },
    {
      title: 'Upload Image for Visual Indexing',
      previewTitle: 'Step 2: Image Processing',
      previewContent: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div
            style={{
              padding: '1.25rem',
              border: '2px dashed #93c5fd',
              borderRadius: '8px',
              backgroundColor: '#eff6ff',
              textAlign: 'center',
            }}
          >
            <Upload size={22} style={{ color: '#2563eb', margin: '0 auto 0.4rem auto', display: 'block' }} />
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#1e3a8a' }}>casio_calculator_library.jpg</div>
            <div style={{ fontSize: '0.7rem', color: '#3b82f6', marginTop: '0.2rem' }}>1.4 MB • Preprocessing & aspect normalization complete</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b' }}>
            <span>Category: Electronics</span>
            <span style={{ color: '#059669', fontWeight: 600 }}>Ready for matching</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Compare Visual & Attribute Features',
      previewTitle: 'Step 3: Similarity Matching',
      previewContent: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0f172a' }}>Visual Feature Distance Matrix</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--accent-terracotta)', fontWeight: 600 }}>Vector Evaluation</span>
            </div>
            <div style={{ height: '6px', width: '100%', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '88%', backgroundColor: 'var(--accent-terracotta)', borderRadius: '3px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#64748b', marginTop: '0.35rem' }}>
              <span>Comparison against recent found listings</span>
              <span>Evaluating color & layout</span>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.4 }}>
            Evaluating color histogram, shape contours, and item category filters.
          </div>
        </div>
      ),
    },
    {
      title: 'Display Candidate Matches to Owner',
      previewTitle: 'Step 4: Ranked Candidate Matches',
      previewContent: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <div style={{ padding: '0.65rem 0.8rem', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#166534' }}>Match #1: Black Scientific Calculator</div>
              <div style={{ fontSize: '0.7rem', color: '#15803d' }}>Turned in at Library Front Desk • Today, 3:15 PM</div>
            </div>
            <span style={{ padding: '0.2rem 0.5rem', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>High Probable Match</span>
          </div>
          <div style={{ padding: '0.65rem 0.8rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#334155' }}>Match #2: Casio fx-82MS</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Found in Lab 3 • Yesterday</div>
            </div>
            <span style={{ padding: '0.2rem 0.5rem', backgroundColor: '#f1f5f9', color: '#64748b', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 500 }}>Moderate</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Featured Project</span>
          </div>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>
            FindIt Campus — AI Lost & Found System
          </h2>
          <p className="section-desc">
            An intelligent campus lost-and-found solution designed to simplify finding misplaced belongings through visual comparison.
          </p>
        </div>

        {/* Main Project Card */}
        <div
          className="card-base"
          style={{
            padding: '2.25rem',
            backgroundColor: '#FFFFFF',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '3.5rem',
            borderColor: 'var(--border-light)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'start',
            }}
            className="featured-grid"
          >
            {/* Left: Project Details & Story */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge badge-blue">
                  {featuredProject.badge}
                </span>
                <span className="badge badge-emerald">
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                  Live Deployment
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem',
                }}
              >
                {featuredProject.title}
              </h3>

              <div
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--accent-blue)',
                  marginBottom: '1rem',
                }}
              >
                {featuredProject.tagline}
              </div>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                }}
              >
                {featuredProject.summary}
              </p>

              {/* Key Highlights */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
                  Core System Capabilities
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {featuredProject.keyHighlights.map((hl, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '2px', flexShrink: 0 }} />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Confirmed Technologies */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Confirmed Technical Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {featuredProject.confirmedTech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Callout */}
              <div
                style={{
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--accent-blue-subtle)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--accent-blue-border)',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-blue)', marginBottom: '0.2rem' }}>
                  <Cpu size={14} />
                  <span>Pipeline Architecture Status</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {featuredProject.techToVerifyNotice}
                </div>
              </div>

              {/* Action Buttons: Only show live demo, repo button cleanly omitted as requested */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={featuredProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="btn-live-findit"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Right: Custom 2D Interactive Product Mockup */}
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden',
                }}
              >
                {/* 2D Browser Chrome Bar */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '0.65rem 1rem',
                    borderBottom: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f87171', display: 'inline-block' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#fbbf24', display: 'inline-block' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#34d399', display: 'inline-block' }} />
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-tertiary)',
                      backgroundColor: '#ffffff',
                      padding: '0.2rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span>🔒 findit-campus-pi.vercel.app</span>
                  </div>
                  <div style={{ width: '38px' }} />
                </div>

                {/* 2D App Header */}
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: 'var(--accent-blue)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>
                      FC
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>FindIt Campus</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-blue)', padding: '0.2rem 0.5rem', backgroundColor: 'var(--accent-blue-subtle)', borderRadius: '4px' }}>
                      Active Campus Portal
                    </span>
                  </div>
                </div>

                {/* Interactive Workflow Step Tabs */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    borderBottom: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-secondary)',
                  }}
                >
                  {featuredProject.workflow.map((item, idx) => (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      style={{
                        padding: '0.65rem 0.5rem',
                        border: 'none',
                        borderBottom: activeStep === idx ? '2px solid var(--accent-blue)' : '2px solid transparent',
                        backgroundColor: activeStep === idx ? '#ffffff' : 'transparent',
                        color: activeStep === idx ? 'var(--accent-blue)' : 'var(--text-tertiary)',
                        fontWeight: activeStep === idx ? 700 : 500,
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        textAlign: 'center',
                      }}
                    >
                      <div>{item.step}</div>
                      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</div>
                    </button>
                  ))}
                </div>

                {/* Interactive Screen Preview Box */}
                <div style={{ padding: '1.25rem', backgroundColor: '#ffffff' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
                    {stepDetails[activeStep].previewTitle}
                  </div>

                  {stepDetails[activeStep].previewContent}

                  {/* Flow description under active step */}
                  <div
                    style={{
                      marginTop: '1rem',
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: '8px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                    }}
                  >
                    <strong>Workflow Detail:</strong> {featuredProject.workflow[activeStep].description}
                  </div>
                </div>

                {/* Interactive Stepper Navigation Footer */}
                <div
                  style={{
                    padding: '0.75rem 1.25rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    Step {activeStep + 1} of 4 in matching pipeline
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev + 1) % 4)}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent-blue)',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <span>Next Stage</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .featured-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
