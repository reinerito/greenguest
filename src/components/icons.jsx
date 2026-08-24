const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const HomeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" />
  </svg>
)

export const MapIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
    <path d="M9 4v14M15 6v14" />
  </svg>
)

export const CompassIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9l-2.2 5.2L9 16l2.2-5.2L15 9Z" />
  </svg>
)

export const UserIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <circle cx="12" cy="8.5" r="3.5" />
    <path d="M4.5 20c1.5-3.8 4.5-5.5 7.5-5.5s6 1.7 7.5 5.5" />
  </svg>
)

export const BellIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M6 10a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </svg>
)

export const ChevronRight = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
)

export const ChevronLeft = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
)

export const BookmarkIcon = ({ className, filled }) => (
  <svg viewBox="0 0 24 24" className={className} {...p} fill={filled ? 'currentColor' : 'none'}>
    <path d="M6 3.5h12a.5.5 0 0 1 .5.5v17l-6.5-4-6.5 4V4a.5.5 0 0 1 .5-.5Z" />
  </svg>
)

export const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const HeartIcon = ({ className, filled }) => (
  <svg viewBox="0 0 24 24" className={className} {...p} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 20.5S3.5 15.2 3.5 9.3A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.5 3.1c0 5.9-8.5 11.2-8.5 11.2Z" />
  </svg>
)

export const StarIcon = ({ className, filled }) => (
  <svg viewBox="0 0 24 24" className={className} {...p} fill={filled ? 'currentColor' : 'none'}>
    <path d="M12 3.5l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.7L12 3.5Z" />
  </svg>
)

export const InfoIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5M12 8v.01" />
  </svg>
)

export const SearchIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-4.3-4.3" />
  </svg>
)

export const SettingsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 13a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V19a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H10a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1H20a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </svg>
)

export const MessageIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M4 5h16v11H8l-4 4V5Z" />
  </svg>
)

export const PinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
)

export const CalendarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </svg>
)

export const CheckIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
)

export const ShieldIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
  </svg>
)

export const PlusIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)
