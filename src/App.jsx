/**
 * App — root router.
 * Routes:
 *   /                  HomePage (portfolio home)
 *   /about             AboutPage
 *   /contact           ContactPage
 *   /projects/tostem   TostemPage (case study)
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage   from './pages/HomePage'
import TostemPage from './pages/TostemPage'
import AboutPage  from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter basename="/Rachaya_Portfolio">
      <Routes>
        <Route path="/"                   element={<HomePage />} />
        <Route path="/about"              element={<AboutPage />} />
        <Route path="/contact"            element={<ContactPage />} />
        <Route path="/projects/tostem"    element={<TostemPage />} />
        {/* Future project detail pages go here */}
      </Routes>
    </BrowserRouter>
  )
}
