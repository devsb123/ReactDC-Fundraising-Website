import { useState } from 'react'
import Header from './components/Header'
import DonationSection from './components/DonationSection'
import Footer from './components/Footer'
import './App.css'

export type FrequencyType = 'monthly' | 'yearly'

function App() {
  const [frequency, setFrequency] = useState<FrequencyType>('monthly')

  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection frequency={frequency} setFrequency={setFrequency} />
        <DonationSection frequency={frequency} />
      </main>
      <Footer />
    </div>
  )
}

interface HeroProps {
  frequency: FrequencyType
  setFrequency: (f: FrequencyType) => void
}

function HeroSection({ frequency, setFrequency }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">Make a Difference Today</span>
        <h1 className="hero-title">
          Support ReactDC's<br />
          <span className="hero-title-accent">Mission</span>
        </h1>
        <p className="hero-subtitle">
          Your contribution directly funds essential services — from hygiene products
          and groceries to legal aid and career programs — for families rebuilding
          their lives in the DC metro area.
        </p>

        <div className="frequency-toggle">
          <button
            className={`toggle-btn ${frequency === 'monthly' ? 'active' : ''}`}
            onClick={() => setFrequency('monthly')}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${frequency === 'yearly' ? 'active' : ''}`}
            onClick={() => setFrequency('yearly')}
          >
            Yearly
            <span className="toggle-badge">Save more</span>
          </button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">500+</span>
          <span className="stat-label">Families Served</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">15+</span>
          <span className="stat-label">Programs Running</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Community Driven</span>
        </div>
      </div>
    </section>
  )
}

export default App
