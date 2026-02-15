import { useState } from 'react'
import './App.css'
import infinityLogo from './8E3B4AAD-9957-4A9A-B4FE-583555FC6D40.png'

const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'

function App() {
  const [copied, setCopied] = useState(false)

  const handleCopyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback for older browsers
      navigator.clipboard?.writeText(CONTRACT_ADDRESS)
    }
  }
  return (
    <div className="infc-app">
      {/* Floating particles background */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>

      {/* Light trail / grid overlay */}
      <div className="light-grid" aria-hidden="true" />
      <div className="light-trail light-trail-1" aria-hidden="true" />
      <div className="light-trail light-trail-2" aria-hidden="true" />
      <div className="light-trail light-trail-3" aria-hidden="true" />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-brand">
          <img src={infinityLogo} alt="" className="nav-logo-img" />
          <span className="nav-logo">INFINITY CURRENCY</span>
          <span className="nav-ticker">$INFC</span>
        </div>
        <div className="nav-links">
          <button type="button" onClick={handleCopyCA} className="btn-copy-ca">
            {copied ? 'Copied!' : 'COPY CA'}
          </button>
          <a href="#roadmap">Roadmap</a>
          <a href="#why">Why INFC</a>
          <a href="#community">Community</a>
          <a href="#" className="nav-cta">Enter Infinity</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="infinity-symbols" aria-hidden="true">
          <div className="infinity-float infinity-1">$INFC</div>
          <div className="infinity-float infinity-2">$INFC</div>
          <div className="infinity-float infinity-3">$INFC</div>
          <svg className="infinity-svg" viewBox="0 0 200 80" preserveAspectRatio="xMidYMid meet">
            <path
              className="infinity-path"
              pathLength="1"
              d="M 50 40 C 30 40 30 20 50 20 C 70 20 70 40 50 40 C 70 40 70 60 50 60 C 30 60 30 40 50 40"
              fill="none"
              stroke="url(#infinityGradient)"
              strokeWidth="0.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="hero-content">
          <img src={infinityLogo} alt="Infinity Currency" className="hero-logo" />
          <p className="hero-badge">FOREVER</p>
          <h1 className="hero-headline">
            <span className="hero-line">THE INFINITY CURRENCY OF THE WORLD</span>
          </h1>
          <p className="hero-subheadline">
            Growth without end. Value without limits. Infinity Currency is built for perpetual expansion — 
            where momentum never stops and abundance flows forever.
          </p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-primary">Enter Infinity</a>
            <a href="#" className="btn btn-secondary">Join the Official Page on X</a>
          </div>
        </div>
      </section>

      {/* Roadmap - Expansion Cycles (Planetary System) */}
      <section id="roadmap" className="section roadmap">
        <div className="section-header">
          <span className="section-tag">EXPANSION CYCLES</span>
          <h2 className="section-title">Roadmap</h2>
        </div>
        <div className="roadmap-solar-system">
          <div className="roadmap-orbit roadmap-orbit-1" aria-hidden="true" />
          <div className="roadmap-orbit roadmap-orbit-2" aria-hidden="true" />
          <div className="roadmap-orbit roadmap-orbit-3" aria-hidden="true" />
          <div className="roadmap-sun" aria-hidden="true">$INFC</div>
          <div className="roadmap-planet roadmap-planet-1">
            <div className="roadmap-planet-orb">
              <span>1</span>
              <div className="roadmap-planet-glow" />
            </div>
            <div className="roadmap-planet-content">
              <h3>Genesis</h3>
              <p>Launch. Community formation. The infinite future begins.</p>
            </div>
          </div>
          <div className="roadmap-planet roadmap-planet-2">
            <div className="roadmap-planet-orb">
              <span>2</span>
              <div className="roadmap-planet-glow" />
            </div>
            <div className="roadmap-planet-content">
              <h3>Expansion</h3>
              <p>CEX listings. Partnerships. The network grows without bounds.</p>
            </div>
          </div>
          <div className="roadmap-planet roadmap-planet-3">
            <div className="roadmap-planet-orb">
              <span>3</span>
              <div className="roadmap-planet-glow" />
            </div>
            <div className="roadmap-planet-content">
              <h3>Acceleration</h3>
              <p>Ecosystem products. Staking. Yield. Momentum multiplies.</p>
            </div>
          </div>
          <div className="roadmap-planet roadmap-planet-4">
            <div className="roadmap-planet-orb">
              <span>$INFC</span>
              <div className="roadmap-planet-glow" />
            </div>
            <div className="roadmap-planet-content">
              <h3>Infinity</h3>
              <p>The cycle continues. Forever. What comes next is limitless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why INFC */}
      <section id="why" className="section team">
        <div className="section-header">
          <span className="section-tag">info</span>
          <h2 className="section-title">Why INFC</h2>
        </div>
        <div className="why-content">
          <p className="why-intro">
            Infinity Currency isn't built around a trend — it's built around a concept that never expires: endless growth. The infinity symbol represents momentum that doesn't stop, cycles that continue, and value that compounds over time.
          </p>
          <p className="why-intro">
            Crypto rewards belief, narrative, and positioning. Infinity Currency has all three.
          </p>
          <div className="why-points">
            <div className="why-point">
              <h4>Powerful Narrative</h4>
              <p>"Infinite by design." That's a message that sticks. Projects with strong identity outperform forgettable tokens.</p>
            </div>
            <div className="why-point">
              <h4>Community Is the Engine</h4>
              <p>Every major run in crypto is fueled by community energy. Infinity Currency is designed to attract long-term holders who believe in expansion, not just quick flips.</p>
            </div>
            <div className="why-point">
              <h4>Built for Momentum</h4>
              <p>The concept supports continuous phases of growth — expansion cycles, new integrations, evolving utility. It's not about one pump. It's about sustained movement.</p>
            </div>
            <div className="why-point">
              <h4>Psychological Edge</h4>
              <p>The infinity symbol is universal. It signals durability, scale, and permanence. That matters in a crowded market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community - The Infinite Network */}
      <section id="community" className="section community">
        <div className="section-header">
          <span className="section-tag">THE INFINITE NETWORK</span>
          <h2 className="section-title">Community</h2>
          <p className="section-desc">
            Join thousands in the loop. Holders. Believers. The infinite family.
          </p>
        </div>
        <div className="community-grid">
          <a href="#" className="community-card">
            <div className="community-icon">𝕏</div>
            <h3>Twitter / X</h3>
            <p>Real-time updates. Alpha. The pulse of infinity.</p>
          </a>
        </div>
        <div className="community-cta">
          <a href="#" className="btn btn-primary btn-lg">Enter the Infinite Network</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={infinityLogo} alt="" className="footer-logo" />
            <span>INFINITY CURRENCY</span>
            <span className="footer-ticker">$INFC</span>
          </div>
          <p className="footer-tagline">Value Without Limits. Growth Without End.</p>
          <div className="footer-links">
            <a href="#">Docs</a>
            <a href="#">Contract</a>
            <a href="#">Chart</a>
            <a href="#">Buy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
