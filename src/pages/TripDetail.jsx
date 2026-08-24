import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft } from '../components/icons.jsx'
import { trips } from '../data/mockData.js'

export default function TripDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const trip = trips.find(t => t.id === id)

  if (!trip) return <div className="empty-note">Trip nicht gefunden.</div>

  return (
    <>
      <div className="country-hero" style={{ marginTop: 0, height: 220 }}>
        <img src={trip.image} alt={trip.title} />
        <button className="icon-btn" style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(10,14,9,0.6)' }} onClick={() => nav(-1)}>
          <ChevronLeft />
        </button>
        <div className="match-badge" style={{ position: 'absolute', top: 14, right: 14 }}>{trip.match}% Match</div>
      </div>

      <div className="detail-block" style={{ paddingTop: 0 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 6px' }}>{trip.title}</h2>
        <div style={{ fontSize: 13.5, color: 'var(--text-dim)' }}>{trip.days} Tage · {trip.stops} Stopps</div>
        <div style={{ fontSize: 13.5, color: 'var(--text-dim)', marginTop: 2 }}>{trip.tags}</div>

        <div className="avatar-stack" style={{ marginTop: 16 }}>
          {trip.avatars.map((a, i) => <img key={i} src={a} alt="" />)}
          {trip.extra && <div className="extra">+{trip.extra}</div>}
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--text-dim)', marginTop: 8 }}>
          {trip.avatars.length + (trip.extra || 0)} Reisende interessiert
        </div>
      </div>

      <button className="cta-btn">Diesem Trip beitreten</button>
    </>
  )
}
