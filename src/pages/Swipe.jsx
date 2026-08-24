import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, XIcon, HeartIcon, StarIcon, InfoIcon } from '../components/icons.jsx'
import { hosts } from '../data/mockData.js'

export default function Swipe() {
  const nav = useNavigate()
  const [index, setIndex] = useState(0)
  const [exitDir, setExitDir] = useState(null)

  const current = hosts[index]
  const next = hosts[index + 1]

  function decide(dir) {
    if (!current) return
    setExitDir(dir)
    setTimeout(() => {
      setIndex(i => i + 1)
      setExitDir(null)
    }, 220)
  }

  return (
    <>
      <div className="back-row">
        <button className="back-btn" onClick={() => nav(-1)}><ChevronLeft /></button>
        <div className="title">Gastgeber swipen</div>
      </div>

      <div className="swipe-stage">
        {!current && (
          <div className="empty-note" style={{ paddingTop: 100 }}>
            Keine weiteren Gastgeber:innen in deiner Nähe. Schau später wieder vorbei!
          </div>
        )}

        {next && (
          <div className="swipe-card" style={{ transform: 'scale(0.96) translateY(10px)', opacity: 0.7 }}>
            <CardBody host={next} />
          </div>
        )}

        {current && (
          <div
            className="swipe-card"
            style={
              exitDir
                ? { transform: `translateX(${exitDir === 'like' ? 500 : -500}px) rotate(${exitDir === 'like' ? 18 : -18}deg)`, opacity: 0 }
                : undefined
            }
          >
            <CardBody host={current} />
          </div>
        )}
      </div>

      {current && (
        <div className="swipe-actions">
          <button className="round-btn pass" onClick={() => decide('pass')}><XIcon /></button>
          <button className="round-btn star" onClick={() => nav(`/gastgeber/${current.id}`)}><InfoIcon /></button>
          <button className="round-btn like" onClick={() => decide('like')}><HeartIcon filled /></button>
        </div>
      )}
    </>
  )
}

function CardBody({ host }) {
  return (
    <>
      <div className="photo-wrap">
        <img src={host.photo} alt={host.name} />
        {host.isNew && <div className="new-badge">Neu</div>}
      </div>
      <div className="card-info">
        <div className="name-row">
          <h2>{host.name}, {host.age}</h2>
          {host.verified && <span style={{ color: 'var(--accent)' }}>✓</span>}
        </div>
        <div className="sub-loc">{host.location} · Gastgeber:in seit {host.hostSince}</div>
        <div className="tag-chip-row">
          {host.tags.map(t => <span className="tag-chip" key={t}>{t}</span>)}
        </div>
        <div className="bio-text">{host.bio}</div>
      </div>
    </>
  )
}
