import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Copy, Check, MapPin, GraduationCap, ExternalLink } from 'lucide-react';

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
        padding: '3.5rem 0 5.5rem 0',
        backgroundColor: '#FAF7F2',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      {/* Background Decorative Layer 1: Subtle warm coordinate grid */}
      <div
        className="bg-warm-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.85,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(circle at 50% 40%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 40%, transparent 85%)',
        }}
      />

      {/* Background Decorative Layer 2: Organic Wavy Beige Shapes on the Left */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '540px',
          height: '620px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.9,
        }}
        viewBox="0 0 540 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-80 0C-40 180 -120 310 -30 450C30 540 120 570 140 620H-80V0Z"
          fill="#F3EBE0"
        />
        <path
          d="M-80 0C-10 140 -80 250 10 370C70 450 60 550 40 620H-80V0Z"
          fill="#EDE4D6"
        />
        <path
          d="M-80 0C30 110 -20 220 50 310C100 370 70 480 -20 560H-80V0Z"
          fill="#E7DDD0"
          opacity="0.6"
        />
      </svg>

      {/* Background Decorative Layer 3: Organic Wavy Dunes on Bottom Right */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '680px',
          height: '460px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.9,
        }}
        viewBox="0 0 680 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M680 180C560 190 480 260 410 320C330 390 240 420 160 460H680V180Z"
          fill="#F3EDE3"
        />
        <path
          d="M680 260C580 270 510 320 450 370C390 420 320 440 250 460H680V260Z"
          fill="#EBE2D5"
        />
        <path
          d="M680 340C610 345 560 380 500 420C450 450 400 455 350 460H680V340Z"
          fill="#E4D9CA"
          opacity="0.7"
        />
      </svg>

      {/* Background Decorative Layer 4: Delicate Botanical Leaves Illustration on Bottom Right */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '320px',
          height: '360px',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.85,
        }}
        viewBox="0 0 320 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main curved branch */}
        <path
          d="M330 360C300 310 265 240 215 180C170 125 110 90 40 60"
          stroke="#BAAE9B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Leaf 1 (top tip) */}
        <path
          d="M40 60C50 45 75 42 90 52C95 56 75 70 40 60Z"
          fill="#BAAE9B"
        />
        {/* Leaf 2 */}
        <path
          d="M85 85C110 70 135 78 145 95C140 108 115 105 85 85Z"
          fill="#C2B7A5"
        />
        {/* Leaf 3 */}
        <path
          d="M115 125C90 120 75 140 85 160C100 162 115 145 115 125Z"
          fill="#B5A996"
        />
        {/* Leaf 4 */}
        <path
          d="M150 145C180 130 205 145 210 165C200 178 175 172 150 145Z"
          fill="#C6BBB0"
        />
        {/* Leaf 5 */}
        <path
          d="M175 195C160 195 145 220 160 238C178 238 185 215 175 195Z"
          fill="#BBAF9E"
        />
        {/* Leaf 6 */}
        <path
          d="M215 210C248 200 270 215 272 235C260 250 235 240 215 210Z"
          fill="#C7BCAC"
        />
        {/* Leaf 7 */}
        <path
          d="M245 260C230 270 232 295 250 305C268 300 268 280 245 260Z"
          fill="#B3A795"
        />
        {/* Leaf 8 */}
        <path
          d="M275 280C305 275 320 295 322 315C310 325 290 310 275 280Z"
          fill="#C1B5A3"
        />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Introduction & Copy */}
          <div style={{ maxWidth: '650px' }}>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.4rem 0.95rem',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid #E5DCD1',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-xs)',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#2E9D68',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#4F4943',
                  letterSpacing: '0.01em',
                }}
              >
                {profile.statusBadge}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.8vw, 3.85rem)',
                fontWeight: 700,
                color: '#2C2623',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.35rem',
              }}
            >
              I’m <span style={{ color: 'var(--accent-terracotta)' }}>Shaik Subhani</span> —
              <br />
              building practical
              <br />
              solutions with AI and
              <br />
              software.
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.68,
                color: '#5F5852',
                marginBottom: '1.75rem',
                maxWidth: '580px',
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
                marginBottom: '2.25rem',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  border: '1px solid #E6DED4',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: '#524C46',
                }}
              >
                <GraduationCap size={15} style={{ color: 'var(--accent-terracotta)' }} />
                <span>Geethanjali Institute of Science & Technology • B.Tech AI & ML (2027)</span>
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  border: '1px solid #E6DED4',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: '#524C46',
                }}
              >
                <MapPin size={15} style={{ color: 'var(--accent-terracotta)' }} />
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
              <a
                href="#projects"
                className="btn btn-primary"
                id="hero-btn-projects"
                style={{
                  padding: '0.8rem 1.6rem',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-terracotta)',
                  boxShadow: '0 4px 14px rgba(186, 93, 56, 0.28)',
                }}
              >
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className="btn btn-secondary"
                id="hero-btn-contact"
                style={{
                  padding: '0.8rem 1.4rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: '#E2D9CE',
                  color: '#2C2623',
                }}
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </a>

              {/* Quick Copy Email button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                title="Copy email to clipboard"
                aria-label="Copy email address"
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: '#E2D9CE',
                  color: '#2C2623',
                }}
              >
                {copied ? (
                  <>
                    <Check size={16} style={{ color: '#2E9D68' }} />
                    <span style={{ color: '#2E9D68', fontWeight: 600 }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} style={{ color: '#7E7770' }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Copy Email</span>
                  </>
                )}
              </button>

              {/* Conditional Resume button */}
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  id="hero-btn-resume"
                  style={{
                    padding: '0.8rem 1.4rem',
                    borderRadius: '10px',
                  }}
                >
                  <span>View Resume</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Layered Framed Portrait Card with Showcase Details */}
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
                maxWidth: '410px',
              }}
            >
              {/* Outer Decorative Card Frame with Rounded Border */}
              <div
                style={{
                  position: 'relative',
                  border: '1.5px solid #E5DCD0',
                  borderRadius: '30px',
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.35)',
                  boxShadow: '0 8px 30px rgba(50, 40, 30, 0.05)',
                }}
              >
                {/* Dot Grid Pattern in Top-Right Corner of the Frame */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-18px',
                    right: '-18px',
                    width: '72px',
                    height: '72px',
                    backgroundImage: 'radial-gradient(#D5CABF 1.2px, transparent 1.2px)',
                    backgroundSize: '12px 12px',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

                {/* Inner Image Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '430px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: '#EBE4DA',
                    boxShadow: '0 4px 20px rgba(44, 38, 35, 0.08)',
                  }}
                >
                  <img
                    src={profile.avatar}
                    alt="Shaik Subhani — AI & Software Developer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '50% 25%',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#7A736C;text-align:center;padding:1.5rem;">
                            <div style="width:72px;height:72px;border-radius:50%;background:#FAF2EC;color:#BA5D38;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:24px;margin-bottom:12px;">SS</div>
                            <strong style="color:#2C2623;margin-bottom:4px;">Shaik Subhani</strong>
                            <span style="font-size:0.875rem;">AI & ML Student</span>
                          </div>
                        `;
                      }
                    }}
                  />

                  {/* Gentle gradient overlay at bottom of photo */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(30, 25, 22, 0.45) 0%, rgba(30, 25, 22, 0) 35%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Overlay Name & Student Tag at Bottom of Portrait */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      left: '0.85rem',
                      right: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      padding: '0.75rem 1rem',
                      borderRadius: '14px',
                      boxShadow: '0 4px 16px rgba(30, 25, 22, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#2C2623' }}>
                        Shaik Subhani
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#7E766F', fontWeight: 500 }}>
                        B.Tech AI & ML • Class of 2027
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '0.35rem 0.65rem',
                        backgroundColor: '#FAF2EC',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--accent-terracotta)',
                        border: '1px solid #E8D3C6',
                      }}
                    >
                      Portfolio
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge on Top Left: Computer Vision Focus */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '-1.5rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6DED4',
                  borderRadius: '12px',
                  padding: '0.65rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 6px 20px rgba(50, 40, 30, 0.08)',
                  zIndex: 3,
                }}
                className="hero-badge-float"
              >
                {/* Connected graph/nodes icon in terracotta */}
                <div
                  style={{
                    width: '1.9rem',
                    height: '1.9rem',
                    borderRadius: '8px',
                    backgroundColor: '#FAF2EC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-terracotta)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#2C2623', lineHeight: 1.15 }}>
                    Computer Vision
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#857E77' }}>
                    Image Similarity Focus
                  </div>
                </div>
              </div>

              {/* Floating Badge on Bottom Right: Python • Flask • SQLite */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-0.75rem',
                  right: '-1rem',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E6DED4',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.55rem 0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 6px 20px rgba(50, 40, 30, 0.08)',
                  zIndex: 3,
                }}
                className="hero-badge-float-bottom"
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-terracotta)',
                  }}
                />
                <span style={{ fontSize: '0.78125rem', fontWeight: 600, color: '#4A443E' }}>
                  Python • Flask • SQLite
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.95fr !important;
          }
        }
        @media (max-width: 580px) {
          .hero-badge-float {
            left: 0.25rem !important;
            top: -1.25rem !important;
          }
          .hero-badge-float-bottom {
            right: 0.25rem !important;
            bottom: -0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
};
