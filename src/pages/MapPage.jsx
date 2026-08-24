import { Link } from 'react-router-dom'
import { SettingsIcon, ChevronRight } from '../components/icons.jsx'
import { recentVisits, mapStats } from '../data/mockData.js'

export default function MapPage() {
  return (
    <>
      <div className="topbar">
        <h1>Map</h1>
        <div className="icon-btn"><SettingsIcon /></div>
      </div>

      <div className="map-hero">
        <WorldMap />
      </div>

      <div className="stat-pair">
        <div className="stat-box">
          <div className="num">{mapStats.countriesVisited}</div>
          <div className="lbl">Länder bereist</div>
        </div>
        <div className="stat-box">
          <div className="num">{mapStats.continents}</div>
          <div className="lbl">Kontinente</div>
        </div>
      </div>

      <div className="section-head" style={{ padding: '0 20px', marginBottom: 12 }}>
        <h2 style={{ fontSize: 17 }}>Letzte Besuche</h2>
      </div>
      {recentVisits.map(v => (
        <Link to={`/gastgeber/${v.id}`} className="visit-row" key={v.id}>
          <img className="avatar" src={v.avatar} alt="" />
          <div className="body">
            <div className="name">{v.name} {v.flag}</div>
            <div className="loc">{v.location}</div>
            <div className="when">{v.when}</div>
          </div>
          <img className="thumb" src={v.image} alt="" />
          <ChevronRight style={{ width: 16, height: 16, color: 'var(--text-dim)' }} />
        </Link>
      ))}
    </>
  )
}

function WorldMap() {
  const points = [
    [60, 55], [140, 50], [230, 45], [300, 60], [320, 130], [90, 140], [200, 150],
  ]
  return (
    <svg viewBox="0 0 400 200" width="100%" height="100%">
      {points.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="#a6e22e" opacity="0.15" />
          <circle cx={x} cy={y} r="4" fill="#a6e22e" />
        </g>
      ))}
      <path
        d="M60 55 Q140 20 230 45 Q280 55 300 60 Q330 90 320 130 Q250 170 200 150 Q140 160 90 140 Q60 100 60 55 Z"
        fill="none" stroke="#a6e22e" strokeWidth="1" strokeDasharray="2 6" opacity="0.5"
      />
    </svg>
  )
}
