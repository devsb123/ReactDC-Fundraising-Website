import type { FrequencyType } from '../App'
import MonthlyTiers from './MonthlyTiers'
import YearlyTiers from './YearlyTiers'
import './DonationSection.css'

interface Props {
  frequency: FrequencyType
}

// Placeholder payment links — swap these for real URLs when ready
export const MONTHLY_LINK = 'https://donate.example.com/reactdc/monthly'
export const YEARLY_LINK  = 'https://donate.example.com/reactdc/yearly'

export default function DonationSection({ frequency }: Props) {
  return (
    <section id="donate" className="donation-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            {frequency === 'monthly' ? 'Monthly Giving Tiers' : 'Annual Giving Tiers'}
          </h2>
          <p className="section-subtitle">
            {frequency === 'monthly'
              ? 'Choose a recurring monthly amount. Every dollar goes directly to families in need.'
              : 'Make an annual commitment and unlock exclusive benefits, including access to ReactDC Board Meetings for top-tier donors.'}
          </p>
        </div>

        {frequency === 'monthly' ? (
          <MonthlyTiers donationLink={MONTHLY_LINK} />
        ) : (
          <YearlyTiers donationLink={YEARLY_LINK} />
        )}

        <p className="one-time-note">
          Prefer a one-time gift?{' '}
          <a href={MONTHLY_LINK} target="_blank" rel="noopener noreferrer">
            Donate any amount here.
          </a>
        </p>
      </div>
    </section>
  )
}
