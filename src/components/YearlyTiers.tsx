import './TierCards.css'

interface Props {
  donationLink: string
}

const tiers = [
  {
    id: 'friend-yr',
    name: 'Friend',
    amount: 50,
    monthlyEquiv: '~$4',
    color: 'green',
    highlight: false,
    tagline: 'A year of small but powerful contributions.',
    impact: 'Keeps one family member stocked with daily essentials.',
    boardMeeting: false,
    items: [
      'Hygiene products & baby diapers',
      'Transportation fees',
      'Printing cover letters & résumés',
      'Internet access for students & children',
      'Office supplies',
    ],
  },
  {
    id: 'advocate-yr',
    name: 'Advocate',
    amount: 250,
    monthlyEquiv: '~$21',
    color: 'red',
    highlight: false,
    tagline: 'Sustained career and community support.',
    impact: 'Funds career programs and core living resources.',
    boardMeeting: false,
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
    id: 'sustainer-yr',
    name: 'Sustainer',
    amount: 1000,
    monthlyEquiv: '~$83',
    color: 'gold',
    highlight: true,
    tagline: 'Top-tier impact — plus exclusive access.',
    impact: 'Covers major life-stabilizing costs and mentorship for a family.',
    boardMeeting: true,
    items: [
      'Hospital fees',
      'Furniture for new homes',
      'Rent & electric bills',
      'Legal & court fees',
      'Mentorship programs',
      'ReactWoman & PC programs',
      'Access to React Board Meetings',
    ],
  },
  {
    id: 'champion-yr',
    name: 'Champion',
    amount: 2000,
    monthlyEquiv: '~$167',
    color: 'gold',
    highlight: false,
    tagline: 'The highest level of partnership with ReactDC.',
    impact: 'Transformational funding for entire families and programs.',
    boardMeeting: true,
    items: [
      'All Sustainer benefits',
      'Hospital fees',
      'Furniture for new homes',
      'Rent & electric bills',
      'Legal & court fees',
      'Mentorship programs',
      'ReactWoman & PC programs',
      'Priority access to React Board Meetings',
    ],
  },
]

export default function YearlyTiers({ donationLink }: Props) {
  return (
    <div className="tier-grid tier-grid--four">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`tier-card tier-card--${tier.color} ${tier.highlight ? 'tier-card--featured' : ''}`}
        >
          {tier.highlight && <div className="featured-badge">Best Value</div>}

          <div className="tier-header">
            <div className={`tier-icon tier-icon--${tier.color}`}>
              {tier.id === 'friend-yr'    && '🤝'}
              {tier.id === 'advocate-yr'  && '📣'}
              {tier.id === 'sustainer-yr' && '⭐'}
              {tier.id === 'champion-yr'  && '🏆'}
            </div>
            <h3 className="tier-name">{tier.name}</h3>
            <div className="tier-price">
              <span className="price-dollar">$</span>
              <span className="price-amount">{tier.amount.toLocaleString()}</span>
              <span className="price-period">/yr</span>
            </div>
            <p className="tier-equiv">{tier.monthlyEquiv} per month</p>
            <p className="tier-tagline">{tier.tagline}</p>
          </div>

          {tier.boardMeeting && (
            <div className="board-badge">
              <span className="board-icon">🎟️</span>
              <span>Exclusive React Board Meetings</span>
            </div>
          )}

          <div className="tier-impact">
            <span className="impact-label">Your impact</span>
            <p className="impact-text">{tier.impact}</p>
          </div>

          <ul className="tier-items">
            {tier.items.map((item) => (
              <li key={item} className={`tier-item ${item.toLowerCase().includes('board') ? 'tier-item--special' : ''}`}>
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
            Give ${tier.amount.toLocaleString()}/year
          </a>
        </div>
      ))}
    </div>
  )
}
