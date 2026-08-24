import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, MessageIcon } from '../components/icons.jsx'
import { hosts, currentUser } from '../data/mockData.js'

export default function HostDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const host = hosts.find(h => h.id === id) || currentUser

  return (
    <>
      <div className="back-row">
        <button className="back-btn" onClick={() => nav(-1)}><ChevronLeft /></button>
        <div className="title">Profil</div>
      </div>

      <div className="profile-hero">
        <img src={host.photo || host.coverPhoto} alt="" />
        <div>
          <h2>{host.name}, {host.age} {host.verified && <span style={{ color: 'var(--accent)', fontSize: 15 }}>✓</span>}</h2>
          <div className="loc">{host.location}</div>
          <div className="since">Gastgeber:in seit {host.hostSince}</div>
        </div>
      </div>

      {host.stats && (
        <div className="stat-pair">
          <div className="stat-box">
            <div className="num">{host.stats.tripsAsHost}</div>
            <div className="lbl">Trips als Gastgeber</div>
          </div>
          <div className="stat-box">
            <div className="num">{host.stats.rating} ★</div>
            <div className="lbl">Bewertung ({host.stats.reviews})</div>
          </div>
        </div>
      )}

      <div className="detail-block" style={{ paddingTop: 0 }}>
        <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.5 }}>{host.bio}</p>
      </div>

      <div className="chip-row">
        {host.tags.map(t => <span className="chip" key={t}>{t}</span>)}
      </div>

      {host.offers && (
        <>
          <div className="section-head" style={{ padding: '0 20px' }}>
            <h2 style={{ fontSize: 16 }}>Über mich</h2>
          </div>
          <div className="offers-grid" style={{ marginBottom: 20 }}>
            {host.offers.map(o => (
              <div className="offer-box" key={o.title}>
                <div className="ic">{o.icon}</div>
                <div className="t">{o.title}</div>
                <div className="s">{o.subtitle}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {host.lastVisit && (
        <>
          <div className="section-head" style={{ padding: '0 20px', marginBottom: 12 }}>
            <h2 style={{ fontSize: 16 }}>Letzter Besuch</h2>
          </div>
          <div className="review-card">
            <div className="hero-img"><img src={host.lastVisit.photos[0]} alt="" /></div>
            <div className="body">
              <div className="top-row">
                <div>
                  <div className="name">Mit {host.lastVisit.withName} {host.lastVisit.flag}</div>
                  <div className="loc-date">{host.lastVisit.location}</div>
                  <div className="loc-date">{host.lastVisit.dateRange}</div>
                </div>
                <div className="stars-inline">
                  {'★'.repeat(host.lastVisit.rating)}
                </div>
              </div>
              <div className="quote">&ldquo;{host.lastVisit.quote}&rdquo;</div>
              <div className="review-thumbs">
                {host.lastVisit.photos.map((p, i) => <img key={i} src={p} alt="" />)}
              </div>
            </div>
          </div>
        </>
      )}

      <button className="cta-btn">
        <MessageIcon style={{ width: 18, height: 18 }} /> Nachricht schreiben
      </button>
    </>
  )
}
