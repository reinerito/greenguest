import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from '../components/icons.jsx'
import { challenges } from '../data/mockData.js'

const tabs = [
  { id: 'alle', label: 'Alle' },
  { id: 'aktiv', label: 'Aktiv' },
  { id: 'abgeschlossen', label: 'Abgeschlossen' },
]

export default function Challenges() {
  const [tab, setTab] = useState('alle')
  const nav = useNavigate()

  const filtered = challenges.filter(c => {
    if (tab === 'alle') return true
    if (tab === 'aktiv') return c.status === 'active'
    return c.status === 'completed'
  })

  return (
    <>
      <div className="back-row">
        <button className="back-btn" onClick={() => nav(-1)}><ChevronLeft /></button>
        <div className="title">Challenges</div>
        <button className="link-accent">Meine Badges</button>
      </div>

      <div className="pill-tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            className={'pill-tab' + (tab === t.id ? ' active' : '')}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="section">
        {filtered.map(c => (
          <div className="challenge-card" key={c.id}>
            <img src={c.image} alt="" />
            <div className="body">
              <div className="head-row">
                <h3>{c.title}</h3>
                <ChevronRight className="chevron" style={{ width: 18, height: 18 }} />
              </div>
              <div className="desc">{c.description}</div>
              <div className="progress-row">
                <span className="progress-label">{c.progress} / {c.total}</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${Math.min(100, (c.progress / c.total) * 100)}%` }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
                <span className="points-label">+{c.points} Punkte</span>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="empty-note">Keine Challenges in dieser Kategorie.</div>}
      </div>
    </>
  )
}
