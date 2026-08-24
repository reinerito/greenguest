import { Link } from 'react-router-dom'
import { BellIcon, PinIcon } from '../components/icons.jsx'
import { events, trips } from '../data/mockData.js'

export default function Home() {
  return (
    <>
      <div className="topbar">
        <h1>Start</h1>
        <Link to="/benachrichtigungen" className="icon-btn"><BellIcon /></Link>
      </div>

      <div className="section">
        <div className="section-head">
          <h2>Events</h2>
          <Link to="/entdecken" className="link-accent">Alle anzeigen</Link>
        </div>
        <div className="hscroll">
          {events.filter(e => e.day).map(e => (
            <Link to={`/event/${e.id}`} className="event-card" key={e.id}>
              <div className="img-wrap">
                <img src={e.image} alt={e.title} />
                <div className="event-date-badge">
                  <div className="day">{e.day}</div>
                  <div className="month">{e.month}</div>
                </div>
              </div>
              <div className="body">
                <h3>{e.title}</h3>
                <div className="meta"><PinIcon style={{ width: 12, height: 12 }} /> {e.location}</div>
                {e.attendees && <div className="meta" style={{ marginTop: 4 }}>{e.attendees} nehmen teil</div>}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="section" style={{ marginTop: 20 }}>
        <div className="section-head">
          <h2>Trips vorgeschlagen</h2>
          <Link to="/entdecken" className="link-accent">Alle anzeigen</Link>
        </div>
        {trips.map(t => (
          <Link
            to={`/trip/${t.id}`}
            className="trip-card"
            key={t.id}
            style={{ backgroundImage: `url(${t.image})` }}
          >
            <div className="content">
              <h3>{t.title}</h3>
              <div className="sub">{t.days} Tage · {t.stops} Stopps</div>
              <div className="tags">{t.tags}</div>
              <div className="footer-row">
                <div className="avatar-stack">
                  {t.avatars.map((a, i) => <img key={i} src={a} alt="" />)}
                  {t.extra && <div className="extra">+{t.extra}</div>}
                </div>
                <div className="match-badge">{t.match}% Match</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
