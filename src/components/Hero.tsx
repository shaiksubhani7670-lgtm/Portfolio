import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Copy, Check, MapPin, GraduationCap, Sparkles, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { profile } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '3.5rem 0 5rem 0',
        background: 'radial-gradient(ellipse at 50% 0%, #f0f7ff 0%, #ffffff 70%)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Decorative 2D Subtle Geometric Dots */}
      <div
        className="bg-dot-subtle"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.7,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Introduction & Copy */}
          <div style={{ maxWidth: '640px' }}>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.35rem 0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid var(--accent-blue-border)',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-xs)',
                marginBottom: '1.25rem',
              }}
            >
              <span className="pulse-dot" />
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.01em',
                }}
              >
                {profile.statusBadge}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4.2vw, 3.25rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              I’m <span style={{ color: 'var(--accent-blue)' }}>Shaik Subhani</span> — building practical solutions with AI and software.
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem',
              }}
            >
              {profile.subheadline}
            </p>

            {/* Context Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.625rem',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                }}
              >
                <GraduationCap size={15} style={{ color: 'var(--accent-blue)' }} />
                <span>Geethanjali Institute of Science & Technology • B.Tech AI & ML (2027)</span>
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                }}
              >
                <MapPin size={15} style={{ color: 'var(--accent-blue)' }} />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.875rem',
                alignItems: 'center',
              }}
            >
              <a href="#projects" className="btn btn-primary" id="hero-btn-projects">
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn btn-secondary" id="hero-btn-contact">
                <Mail size={17} />
                <span>Contact Me</span>
              </a>

              {/* Quick Copy Email button with tooltip */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                title="Copy email to clipboard"
                aria-label="Copy email address"
                style={{
                  padding: '0.75rem 0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                {copied ? (
                  <>
                    <Check size={16} style={{ color: '#059669' }} />
                    <span style={{ color: '#059669', fontWeight: 600 }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} style={{ color: 'var(--text-tertiary)' }} />
                    <span style={{ fontSize: '0.8125rem' }}>Copy Email</span>
                  </>
                )}
              </button>

              {/* Conditional Resume button: "Do not invent a resume link; show the resume button only when a resume file is available." */}
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  id="hero-btn-resume"
                >
                  <span>View Resume</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Natural Portrait & 2D AI Details */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Visual Frame Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
              }}
            >
              {/* Refined 2D Geometric Backdrop Line */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '28px',
                  border: '2px dashed var(--accent-blue-border)',
                  pointerEvents: 'none',
                  zIndex: 0,
                  opacity: 0.8,
                }}
              />

              {/* Soft decorative accent glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15%',
                  right: '-15%',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Main Portrait Card */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '0.75rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '420px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-secondary)',
                  }}
                >
                  <img
                    src={profile.avatar}
                    alt="Shaik Subhani — AI & Software Developer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      /* Clean crop focused naturally on face & shoulders, cropping out phone watermark at bottom */
                      objectPosition: '50% 25%',
                      display: 'block',
                    }}
                    onError={(e) => {
                      /* Graceful fallback if image path ever fails */
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#64748b;text-align:center;padding:1.5rem;">
                            <div style="width:72px;height:72px;border-radius:50%;background:#eff6ff;color:#2563eb;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:24px;margin-bottom:12px;">SS</div>
                            <strong style="color:#0f172a;margin-bottom:4px;">Shaik Subhani</strong>
                            <span style="font-size:0.875rem;">AI & ML Student</span>
                          </div>
                        `;
                      }
                    }}
                  />
                  
                  {/* Subtle bottom gradient overlay for card elegance */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0) 35%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Overlay Name Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-sm)',
                      border: '1px solid rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        Shaik Subhani
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                        B.Tech AI & ML • Class of 2027
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '0.3rem 0.55rem',
                        backgroundColor: 'var(--accent-blue-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--accent-blue)',
                        border: '1px solid var(--accent-blue-border)',
                      }}
                    >
                      Portfolio
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 2D Badge: AI & Computer Vision Focus */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '-1.5rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.6rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 2,
                }}
                className="hero-badge-float"
              >
                <div
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '6px',
                    backgroundColor: 'var(--accent-blue-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                  }}
                >
                  <Sparkles size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>
                    Computer Vision
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)' }}>
                    Image Similarity Focus
                  </div>
                </div>
              </div>

              {/* Floating 2D Badge: Practical Software Stack */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  right: '-1rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.55rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 2,
                }}
                className="hero-badge-float-bottom"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-blue)',
                    }}
                  />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Python • Flask • SQLite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.9fr !important;
          }
        }
        @media (max-width: 480px) {
          .hero-badge-float {
            left: 0.5rem !important;
            top: -1rem !important;
          }
          .hero-badge-float-bottom {
            right: 0.5rem !important;
            bottom: -0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
