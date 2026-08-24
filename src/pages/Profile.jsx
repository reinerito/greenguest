import { Link } from 'react-router-dom'
import { SettingsIcon, ChevronRight } from '../components/icons.jsx'
import { currentUser } from '../data/mockData.js'

export default function Profile() {
  return (
    <>
      <div className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: '#0e130a', border: '2px solid var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 16, color: 'var(--accent)',
          }}>
            GG
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 17 }}>Green Guest</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-dim)' }}>@greenguest</div>
          </div>
        </div>
        <div className="icon-btn"><SettingsIcon /></div>
      </div>

      <div style={{ padding: '0 20px 16px', color: 'var(--accent)', fontSize: 13.5, fontWeight: 600 }}>
        Stay green. Stay free.
      </div>

      <div className="stat-pair" style={{ padding: '0 20px 20px' }}>
        <div className="stat-box">
          <div className="num white">{currentUser.stats.trips}</div>
          <div className="lbl">Trips</div>
        </div>
        <div className="stat-box">
          <div className="num white">{currentUser.stats.reviewsCount}</div>
          <div className="lbl">Reviews</div>
        </div>
        <div className="stat-box">
          <div className="num white">{currentUser.stats.friends}</div>
          <div className="lbl">Friends</div>
        </div>
      </div>

      <div className="mini-map-card">
        <MiniMap />
      </div>
      <Link to="/karte" className="link-accent" style={{ display: 'block', textAlign: 'center', padding: '12px 0 24px' }}>
        Tap to view full map →
      </Link>

      <div className="section-head" style={{ padding: '0 20px', marginBottom: 12 }}>
        <h2 style={{ fontSize: 16 }}>Mein Profil</h2>
      </div>
      <Link to={`/gastgeber/${currentUser.id}`} className="event-row-card" style={{ margin: '0 20px 12px' }}>
        <img src={currentUser.photo} alt="" style={{ borderRadius: '50%' }} />
        <div className="body">
          <h3>{currentUser.name}, {currentUser.age}</h3>
          <div className="meta">{currentUser.location}</div>
        </div>
        <ChevronRight style={{ width: 18, height: 18, color: 'var(--text-dim)' }} />
      </Link>
      <Link to="/challenges" className="event-row-card" style={{ margin: '0 20px 12px' }}>
        <div style={{ width: 46, height: 46, borderRadius: 10, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🏆</div>
        <div className="body">
          <h3>Challenges &amp; Badges</h3>
          <div className="meta">Sieh deinen Fortschritt</div>
        </div>
        <ChevronRight style={{ width: 18, height: 18, color: 'var(--text-dim)' }} />
      </Link>
      <Link to="/laender" className="event-row-card" style={{ margin: '0 20px 12px' }}>
        <div style={{ width: 46, height: 46, borderRadius: 10, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🌍</div>
        <div className="body">
          <h3>Länder &amp; Gesetze</h3>
          <div className="meta">Rechtliche Infos nachlesen</div>
        </div>
        <ChevronRight style={{ width: 18, height: 18, color: 'var(--text-dim)' }} />
      </Link>
    </>
  )
}

function MiniMap() {
  return (
    <svg viewBox="0 0 400 200" width="100%" height="100%">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1c2a15" />
          <stop offset="100%" stopColor="#0a0e09" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#glow)" />
      {[[60, 60], [120, 100], [200, 70], [270, 110], [330, 60], [180, 150]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#a6e22e" opacity="0.85" />
      ))}
      <path d="M60 60 L120 100 L200 70 L270 110 L330 60 M120 100 L180 150" stroke="#a6e22e" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" fill="none" />
    </svg>
  )
}
