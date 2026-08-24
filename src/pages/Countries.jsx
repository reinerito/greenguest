import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, SearchIcon, InfoIcon } from '../components/icons.jsx'
import { countries } from '../data/mockData.js'

export default function Countries() {
  const nav = useNavigate()
  const [q, setQ] = useState('')

  const filtered = countries.filter(c => c.name.toLowerCase().includes(q.toLowerCase()))

  return (
    <>
      <div className="back-row">
        <button className="back-btn" onClick={() => nav(-1)}><ChevronLeft /></button>
        <div className="title">Länder &amp; Gesetze</div>
      </div>

      <div className="search-bar">
        <SearchIcon style={{ width: 18, height: 18 }} />
        <input placeholder="Länder suchen" value={q} onChange={e => setQ(e.target.value)} />
      </div>

      {filtered.map(c => (
        <Link to={`/laender/${c.id}`} className="country-row" key={c.id}>
          <img src={c.image} alt="" />
          <div className="body">
            <h3>{c.name}</h3>
            <div className="status">{c.status}</div>
          </div>
          <div className="info-btn"><InfoIcon style={{ width: 15, height: 15 }} /></div>
        </Link>
      ))}
      {filtered.length === 0 && <div className="empty-note">Kein Land gefunden.</div>}
    </>
  )
}
