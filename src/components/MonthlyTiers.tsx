import './TierCards.css'

interface Props {
  donationLink: string
}

const tiers = [
  {
    id: 'friend',
    name: 'Friend',
    amount: 25,
    color: 'green',
    highlight: false,
    tagline: 'Every dollar counts toward daily essentials.',
    impact: 'Funds everyday necessities for one family member.',
    items: [
      'Hygiene products & baby diapers',
      'Transportation fees',
      'Printing cover letters & résumés',
      'Internet access for students & children',
      'Office supplies',
    ],
  },
  {
    id: 'advocate',
    name: 'Advocate',
    amount: 100,
    color: 'red',
    highlight: true,
    tagline: 'Most popular — a meaningful monthly commitment.',
    impact: 'Provides career support and core living resources.',
    items: [
      'Library materials',
      'Groceries',
      'Metro passes',
      'Career-readiness programs',
      'Work clothes',
      'Software subscriptions for case management',
      "Driver's education classes",
    ],
  },
  {
    id: 'sustainer',
    name: 'Sustainer',
    amount: 500,
    color: 'gold',
    highlight: false,
    tagline: 'Transformational support for entire families.',
    impact: 'Covers major life-stabilizing costs for a family.',
    items: [
      'Hospital fees',
      'Furniture for new homes',
      'Rent & electric bills',
      'Legal & court fees',
      'Mentorship programs',
      'ReactWoman & PC programs',
    ],
  },
]

export default function MonthlyTiers({ donationLink }: Props) {
  return (
    <div className="tier-grid">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`tier-card tier-card--${tier.color} ${tier.highlight ? 'tier-card--featured' : ''}`}
        >
          {tier.highlight && <div className="featured-badge">Most Popular</div>}

          <div className="tier-header">
            <div className={`tier-icon tier-icon--${tier.color}`}>
              {tier.id === 'friend' && '🤝'}
              {tier.id === 'advocate' && '📣'}
              {tier.id === 'sustainer' && '⭐'}
            </div>
            <h3 className="tier-name">{tier.name}</h3>
            <div className="tier-price">
              <span className="price-dollar">$</span>
              <span className="price-amount">{tier.amount}</span>
              <span className="price-period">/mo</span>
            </div>
            <p className="tier-tagline">{tier.tagline}</p>
          </div>

          <div className="tier-impact">
            <span className="impact-label">Your impact</span>
            <p className="impact-text">{tier.impact}</p>
          </div>

          <ul className="tier-items">
            {tier.items.map((item) => (
              <li key={item} className="tier-item">
                <span className="item-check">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={donationLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`tier-cta tier-cta--${tier.color}`}
          >
            Give ${tier.amount}/month
          </a>
        </div>
      ))}
    </div>
  )
}
