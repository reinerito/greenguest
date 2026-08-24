import { NavLink } from 'react-router-dom'
import { HomeIcon, MapIcon, CompassIcon, UserIcon } from './icons.jsx'

const items = [
  { to: '/', label: 'Start', Icon: HomeIcon, end: true },
  { to: '/karte', label: 'Karte', Icon: MapIcon },
  { to: '/entdecken', label: 'Entdecken', Icon: CompassIcon },
  { to: '/profil', label: 'Profil', Icon: UserIcon },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {items.map(({ to, label, Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
