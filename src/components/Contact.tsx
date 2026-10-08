import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Main Contact Card */}
        <div
          className="card-base"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '3rem 2rem',
            backgroundColor: '#ffffff',
            boxShadow: 'var(--shadow-card)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Top Decorative Strip */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--accent-terracotta), #D97706, #BA5D38)',
            }}
          />

          {/* Section Tag */}
          <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            <div className="section-tag" style={{ margin: 0 }}>
              <Mail size={14} />
              <span>Get In Touch</span>
            </div>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
            }}
          >
            Let’s discuss AI projects, software, or opportunities.
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto 2.25rem auto',
              lineHeight: 1.6,
            }}
          >
            I am currently open to student internships, collaborative AI/ML projects, and early-career software engineering inquiries.
          </p>

          {/* Email Highlight Box */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1.25rem 1.75rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              marginBottom: '2rem',
              maxWidth: '100%',
            }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
              Direct Email Address
            </span>
            <div
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                fontWeight: 700,
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-mono)',
                wordBreak: 'break-all',
              }}
            >
              {profile.email}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href={`mailto:${profile.email}?subject=Inquiry%20from%20Portfolio`}
                className="btn btn-primary btn-sm"
              >
                <Send size={15} />
                <span>Open Mail Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={15} style={{ color: '#059669' }} />
                    <span style={{ color: '#059669', fontWeight: 600 }}>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ minWidth: '160px' }}
            >
              <Github size={17} />
              <span>GitHub Profile</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ minWidth: '160px' }}
            >
              <Linkedin size={17} />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              fontSize: '0.8125rem',
              color: 'var(--text-tertiary)',
              marginTop: '2rem',
            }}
          >
            <MapPin size={14} style={{ color: 'var(--accent-blue)' }} />
            <span>Based in {profile.location} • Available for remote and hybrid collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};
