import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, InfoIcon, CheckIcon, StarIcon } from '../components/icons.jsx'
import { countries } from '../data/mockData.js'

export default function CountryDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const [rating, setRating] = useState(0)
  const country = countries.find(c => c.id === id)

  if (!country) return <div className="empty-note">Land nicht gefunden.</div>

  return (
    <>
      <div className="back-row">
        <button className="back-btn" onClick={() => nav(-1)}><ChevronLeft /></button>
        <div className="title">{country.name}</div>
      </div>

      <div className="country-hero">
        <img src={country.image} alt={country.name} />
        <div className="icon-btn" style={{ position: 'absolute', top: 12, right: 12 }}>
          <InfoIcon />
        </div>
      </div>

      <div className="detail-block">
        <h3>Rechtliche Lage</h3>
        <div className="legal-status">{country.status}</div>
        <div className="legal-text">{country.legalText}</div>
      </div>

      <div className="detail-block">
        <h3>Wissenswertes</h3>
        <div className="check-list">
          {country.facts.map(f => (
            <div className="check-item" key={f}>
              <span className="tick"><CheckIcon style={{ width: 12, height: 12 }} /></span>
              {f}
            </div>
          ))}
        </div>
      </div>

      <div className="detail-block">
        <h3>Bewerte {country.name}</h3>
        <div className="stars-row">
          {[1, 2, 3, 4, 5].map(n => (
            <button
              key={n}
              onClick={() => setRating(n)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: n <= rating ? 'var(--accent)' : 'var(--text-faint)' }}
            >
              <StarIcon filled={n <= rating} />
            </button>
          ))}
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--text-dim)' }}>
          Deine Bewertung hilft anderen Reisenden.
        </div>
      </div>
    </>
  )
}
