import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SettingsIcon, PinIcon, CalendarIcon, BookmarkIcon, ChevronRight } from '../components/icons.jsx'
import { events, countries, hosts } from '../data/mockData.js'

const tabs = ['Events', 'Places', 'Community']

export default function Explore() {
  const [tab, setTab] = useState('Events')

  return (
    <>
      <div className="topbar">
        <h1>Explore</h1>
        <div className="icon-btn"><SettingsIcon /></div>
      </div>

      <div className="underline-tabs">
        {tabs.map(t => (
          <button
            key={t}
            className={'underline-tab' + (tab === t ? ' active' : '')}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Events' && (
        <div className="section">
          <div className="section-head">
            <h2>Events</h2>
            <span className="link-accent">Alle anzeigen</span>
          </div>
          {events.map(e => (
            <Link to={`/event/${e.id}`} className="event-row-card" key={e.id}>
              <img src={e.image} alt="" />
              <div className="body">
                <h3>{e.title}</h3>
                <div className="meta">
                  <span><CalendarIcon style={{ width: 12, height: 12 }} /> {e.date || `${e.day}. ${e.month}`}</span>
                  <span><PinIcon style={{ width: 12, height: 12 }} /> {e.location}</span>
                </div>
                {e.category && <span className="badge">{e.category}</span>}
              </div>
              <BookmarkIcon style={{ width: 20, height: 20, color: 'var(--text-dim)', flexShrink: 0 }} />
            </Link>
          ))}

          <div className="add-event-row">
            <span className="plus-ic">+</span>
            <div className="grow">
              Event hinzufügen
              <span className="sub">Teile dein Event mit der Community</span>
            </div>
            <ChevronRight style={{ width: 18, height: 18 }} />
          </div>
        </div>
      )}

      {tab === 'Places' && (
        <div className="section">
          <div className="section-head">
            <h2>Länder &amp; Gesetze</h2>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: 13.5, margin: '0 0 16px' }}>
            Informiere dich über die rechtliche Lage in verschiedenen Ländern.
          </p>
          <Link to="/laender" className="link-accent" style={{ display: 'block', marginBottom: 16 }}>
            Alle Länder ansehen →
          </Link>
          {countries.slice(0, 3).map(c => (
            <Link to={`/laender/${c.id}`} className="country-row" key={c.id} style={{ margin: '0 0 12px' }}>
              <img src={c.image} alt="" />
              <div className="body">
                <h3>{c.name}</h3>
                <div className="status">{c.status}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {tab === 'Community' && (
        <div className="section">
          <div className="section-head">
            <h2>Gastgeber:innen</h2>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: 13.5, margin: '0 0 16px' }}>
            Finde Gastgeber:innen, die zu dir passen, und erlebe echte Verbindungen weltweit.
          </p>
          <Link to="/swipen" className="cta-btn" style={{ margin: '0 0 20px', width: '100%' }}>
            Gastgeber swipen
          </Link>
          {hosts.map(h => (
            <Link to={`/gastgeber/${h.id}`} className="event-row-card" key={h.id}>
              <img src={h.photo} alt="" style={{ borderRadius: '50%' }} />
              <div className="body">
                <h3>{h.name}, {h.age}</h3>
                <div className="meta">{h.location}</div>
              </div>
              <ChevronRight style={{ width: 18, height: 18, color: 'var(--text-dim)' }} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
