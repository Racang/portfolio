/**
 * App — root router.
 * Routes:
 *   /                  HomePage (portfolio home)
 *   /about             AboutPage
 *   /contact           ContactPage
 *   /projects          ProjectsPage (all projects listing)
 *   /projects/tostem   TostemPage (case study)
 *   /projects/gena     GenaPage (case study)
 *   /projects/thaioil  ThaioilPage (case study)
 *   /projects/irpc     IrpcPage (case study)
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage    from './pages/HomePage'
import TostemPage  from './pages/TostemPage'
import GenaPage   from './pages/GenaPage'
import ThaioilPage from './pages/ThaioilPage'
import IrpcPage    from './pages/IrpcPage'
import AboutPage   from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/"                   element={<HomePage />} />
        <Route path="/about"              element={<AboutPage />} />
        <Route path="/contact"            element={<ContactPage />} />
        <Route path="/projects"           element={<ProjectsPage />} />
        <Route path="/projects/tostem"    element={<TostemPage />} />
        <Route path="/projects/gena"      element={<GenaPage />} />
        <Route path="/projects/thaioil"   element={<ThaioilPage />} />
        <Route path="/projects/irpc"      element={<IrpcPage />} />
      </Routes>
    </BrowserRouter>
  )
}
