import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, BookmarkIcon, ChevronRight } from '../components/icons.jsx'
import { events } from '../data/mockData.js'

export default function EventDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const [saved, setSaved] = useState(false)
  const [registered, setRegistered] = useState(false)
  const event = events.find(e => e.id === id)

  if (!event) return <div className="empty-note">Event nicht gefunden.</div>

  return (
    <>
      <div className="country-hero" style={{ marginTop: 0 }}>
        <img src={event.image} alt={event.title} />
        <button className="back-btn icon-btn" style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(10,14,9,0.6)' }} onClick={() => nav(-1)}>
          <ChevronLeft />
        </button>
        <button
          className="icon-btn"
          style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(10,14,9,0.6)' }}
          onClick={() => setSaved(s => !s)}
        >
          <BookmarkIcon filled={saved} />
        </button>
      </div>

      <div className="detail-block" style={{ paddingTop: 0 }}>
        <div style={{ color: 'var(--accent)', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 6 }}>EVENT</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{event.title}</h2>
          {event.teamsRegistered && (
            <div style={{ textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '8px 12px', flexShrink: 0 }}>
              <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: 16 }}>👥 {event.teamsRegistered}</div>
              <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>Teams angemeldet</div>
            </div>
          )}
        </div>
        <div style={{ fontSize: 13.5, color: 'var(--text-dim)', marginTop: 8 }}>
          {event.date || `${event.day}. ${event.month}`} · {event.location}
        </div>
        {event.description && (
          <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.55, marginTop: 14 }}>{event.description}</p>
        )}
      </div>

      {event.details && (
        <div className="detail-block" style={{ paddingTop: 0 }}>
          {event.details.map(d => (
            <div className="event-row-card" key={d.title} style={{ padding: '12px 14px' }}>
              <div style={{ fontSize: 20 }}>{d.icon}</div>
              <div className="body">
                <h3 style={{ fontSize: 14 }}>{d.title}</h3>
                <div className="meta">{d.subtitle}</div>
              </div>
              {d.chevron && <ChevronRight style={{ width: 18, height: 18, color: 'var(--text-dim)' }} />}
            </div>
          ))}
        </div>
      )}

      <button className="cta-btn" onClick={() => setRegistered(true)} disabled={registered}>
        {registered
          ? 'Angemeldet ✓'
          : event.teamsRegistered
            ? 'Team erstellen und anmelden'
            : 'Teilnehmen'}
      </button>
    </>
  )
}
