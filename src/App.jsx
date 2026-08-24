import { Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import MapPage from './pages/MapPage.jsx'
import Profile from './pages/Profile.jsx'
import Challenges from './pages/Challenges.jsx'
import Swipe from './pages/Swipe.jsx'
import Countries from './pages/Countries.jsx'
import CountryDetail from './pages/CountryDetail.jsx'
import HostDetail from './pages/HostDetail.jsx'
import EventDetail from './pages/EventDetail.jsx'
import TripDetail from './pages/TripDetail.jsx'

export default function App() {
  return (
    <>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entdecken" element={<Explore />} />
          <Route path="/karte" element={<MapPage />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/swipen" element={<Swipe />} />
          <Route path="/laender" element={<Countries />} />
          <Route path="/laender/:id" element={<CountryDetail />} />
          <Route path="/gastgeber/:id" element={<HostDetail />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/trip/:id" element={<TripDetail />} />
        </Routes>
      </main>
      <BottomNav />
    </>
  )
}
