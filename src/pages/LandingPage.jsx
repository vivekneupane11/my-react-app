import BuyMeACoffeeBadge from '../components/BuyMeACoffeeBadge'

export default function LandingPage({ onGoDemo }) {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="land-hero">
        <div className="land-hero-glow" />
        <div className="land-badge">Open Source &middot; MIT License</div>
        <h1 className="land-title">
          Highlight. Bold.<br />
          <span className="land-gradient">Annotate.</span>
        </h1>
        <p className="land-subtitle">
          A lightweight React library that lets you highlight text, make it bold, and add sticky-note
          comments on any HTML content. Powered by XPath range tracking and Zustand state management.
        </p>
        <div className="land-hero-actions">
          <button className="btn-primary" onClick={onGoDemo}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Try Live Demo
          </button>
          <a href="https://www.buymeacoffee.com/vivekneupaw" target="_blank" rel="noreferrer" className="btn-coffee">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            Buy Me a Coffee
          </a>
        </div>
        <div className="land-install">
          <code>npm i reactjs-editor</code>
        </div>
      </section>

      {/* Screenshot */}
      <section className="land-screenshot">
        <div className="screenshot-frame">
          <div className="screenshot-dots">
            <span /><span /><span />
          </div>
          <img
            src="https://raw.githubusercontent.com/vivekneupane11/demo/main/Screenshot%202024-02-10%20at%2000.35.34.png"
            alt="reactjs-editor in action"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="land-features">
        <h2 className="section-title">Everything You Need</h2>
        <p className="section-sub">Powerful text interaction tools, zero complexity.</p>
        <div className="features-grid">
          <div className="feat-card">
            <div className="feat-icon" style={{ background: 'rgba(250,204,21,0.1)', color: '#facc15' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z"/></svg>
            </div>
            <h3>Text Highlighting</h3>
            <p>Select text and apply custom color highlights instantly via a floating toolbar.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon" style={{ background: 'rgba(124,58,237,0.1)', color: '#a78bfa' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"/><path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"/></svg>
            </div>
            <h3>Bold Formatting</h3>
            <p>One-click bold toggling wraps selected text in standard strong tags.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon" style={{ background: 'rgba(6,182,212,0.1)', color: '#22d3ee' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            </div>
            <h3>Sticky Comments</h3>
            <p>Attach inline sticky-note comments to any text range for review and feedback.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon" style={{ background: 'rgba(244,63,94,0.1)', color: '#fb7185' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Zustand State</h3>
            <p>Built-in state management with useDomValue hook. Serialize, save, and restore.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon" style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </div>
            <h3>XPath Tracking</h3>
            <p>Precise range selection using XPath — handles complex nested DOM structures.</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon" style={{ background: 'rgba(251,146,60,0.1)', color: '#fb923c' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Custom Styling</h3>
            <p>Pass custom CSS class names for highlights. Override toolbar styles freely.</p>
          </div>
        </div>
      </section>

      {/* Big Buy Me a Coffee CTA */}
      <section className="land-coffee-cta">
        <div className="coffee-glow" />
        <div className="coffee-content">
          <div className="coffee-emoji">&#9749;</div>
          <h2>Love this project? Buy me a coffee!</h2>
          <p>
            reactjs-editor is free and open source. If it saved you time or helped your project,
            consider supporting the development with a small donation. Every coffee fuels new features
            and better documentation.
          </p>
          <a
            href="https://www.buymeacoffee.com/vivekneupaw"
            target="_blank"
            rel="noreferrer"
            className="coffee-big-btn"
            aria-label="Buy me a coffee (opens buymeacoffee.com)"
          >
            <BuyMeACoffeeBadge variant="wide" />
          </a>
          <a
            href="https://www.buymeacoffee.com/vivekneupaw"
            target="_blank"
            rel="noreferrer"
            className="coffee-link-text"
          >
            buymeacoffee.com/vivekneupaw
          </a>
        </div>
      </section>

      {/* Video */}
      <section className="land-video">
        <h2 className="section-title">Watch the Tutorial</h2>
        <p className="section-sub">See how to integrate reactjs-editor in your app in minutes.</p>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/iR4xtbGtoU0"
            title="reactjs-editor tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Links / Connect */}
      <section className="land-links">
        <h2 className="section-title">Links & Resources</h2>
        <p className="section-sub">Everything you need to get started and stay connected.</p>
        <div className="links-grid">
          <a href="https://www.npmjs.com/package/reactjs-editor" target="_blank" rel="noreferrer" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(203,56,55,0.1)', color: '#cb3837' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0h-2.668V8.667h2.668v5.331zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h7.999v5.331zM10.665 10H12v2.667h-1.335V10z"/></svg>
            </div>
            <div>
              <strong>npm Package</strong>
              <span>reactjs-editor on npm</span>
            </div>
          </a>
          <a href="https://github.com/vivekneupane11/reactjs-editor" target="_blank" rel="noreferrer" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(255,255,255,0.06)', color: '#e4e4ed' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
            <div>
              <strong>GitHub Repo</strong>
              <span>Source code & issues</span>
            </div>
          </a>
          <a href="https://reactjs-editor-demo.vercel.app/" target="_blank" rel="noreferrer" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(124,58,237,0.1)', color: '#a78bfa' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            </div>
            <div>
              <strong>Official Demo</strong>
              <span>reactjs-editor-demo.vercel.app</span>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=iR4xtbGtoU0" target="_blank" rel="noreferrer" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(255,0,0,0.1)', color: '#f87171' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            <div>
              <strong>YouTube Tutorial</strong>
              <span>Watch step-by-step guide</span>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCJoQhaR1_Gx8dpeZdrCCXsg" target="_blank" rel="noreferrer" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(255,0,0,0.1)', color: '#f87171' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            <div>
              <strong>YouTube Channel</strong>
              <span>More tutorials & content</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/vivek-neupane-b99259194/" target="_blank" rel="noreferrer" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(10,102,194,0.1)', color: '#0a66c2' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div>
              <strong>LinkedIn</strong>
              <span>Connect with Vivek</span>
            </div>
          </a>
          <a href="https://github.com/vivekneupane11" target="_blank" rel="noreferrer" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(255,255,255,0.06)', color: '#e4e4ed' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
            <div>
              <strong>Author GitHub</strong>
              <span>vivekneupane11</span>
            </div>
          </a>
          <a href="https://portfolio-seven-phi-43.vercel.app/" target="_blank" rel="noreferrer" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(124,58,237,0.1)', color: '#a78bfa' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div>
              <strong>Portfolio</strong>
              <span>Author's personal site</span>
            </div>
          </a>
          <a href="mailto:vivekneupane11@gmail.com" className="link-card">
            <div className="link-icon" style={{ background: 'rgba(6,182,212,0.1)', color: '#22d3ee' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <strong>Email</strong>
              <span>vivekneupane11@gmail.com</span>
            </div>
          </a>
        </div>
      </section>

      {/* Bottom Coffee CTA */}
      <section className="land-bottom-cta">
        <a
          href="https://www.buymeacoffee.com/vivekneupaw"
          target="_blank"
          rel="noreferrer"
          className="bottom-coffee"
        >
          <span className="bottom-coffee-text">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            If you enjoy reactjs-editor, buy the author a coffee!
          </span>
        </a>
      </section>

      {/* Footer */}
      <footer className="land-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark">E</span>
            <span className="brand-name">reactjs-editor</span>
          </div>
          <p>A simple react library for text highlighting, bold formatting, and sticky-note comments.</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Package</h4>
            <a href="https://www.npmjs.com/package/reactjs-editor" target="_blank" rel="noreferrer">npm</a>
            <a href="https://github.com/vivekneupane11/reactjs-editor" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://reactjs-editor-demo.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          <div className="footer-col">
            <h4>Learn</h4>
            <a href="https://www.youtube.com/watch?v=iR4xtbGtoU0" target="_blank" rel="noreferrer">YouTube Tutorial</a>
            <a href="https://www.youtube.com/channel/UCJoQhaR1_Gx8dpeZdrCCXsg" target="_blank" rel="noreferrer">YouTube Channel</a>
            <a href="https://github.com/vivekneupane11/reactjs-editor/blob/main/README.md" target="_blank" rel="noreferrer">Documentation</a>
          </div>
          <div className="footer-col">
            <h4>Author</h4>
            <a href="https://www.linkedin.com/in/vivek-neupane-b99259194/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/vivekneupane11" target="_blank" rel="noreferrer">GitHub Profile</a>
            <a href="https://portfolio-seven-phi-43.vercel.app/" target="_blank" rel="noreferrer">Portfolio</a>
            <a href="mailto:vivekneupane11@gmail.com">Email</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="https://www.buymeacoffee.com/vivekneupaw" target="_blank" rel="noreferrer">Buy Me a Coffee</a>
            <a href="https://github.com/vivekneupane11/reactjs-editor/issues" target="_blank" rel="noreferrer">Report Issues</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>MIT License &middot; Made by Vivek Neupane</span>
          <a href="https://www.buymeacoffee.com/vivekneupaw" target="_blank" rel="noreferrer" className="footer-coffee-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            Buy me a coffee
          </a>
        </div>
      </footer>
    </div>
  )
}
