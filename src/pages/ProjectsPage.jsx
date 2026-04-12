/**
 * ProjectsPage — portfolio projects listing page.
 *
 * Figma reference: UI: Projects (node 40000381:69459)
 * Sections (top → bottom):
 *   HomeNavbar       sticky floating pill nav ("Project" link auto-activates)
 *   InnerPageBanner  shared banner, title: "Projects"
 *   Projects grid    2-col responsive grid of ProjectCard components
 *   HomeFooter       shared footer
 *
 * Grid spec (from Figma):
 *   - 2 columns at ≥ md, 1 column on mobile
 *   - column gap: 48px  |  row gap: 36px
 *   - horizontal padding: clamp(24px, 5.6vw, 80px)
 *   - section top padding: ~60px below banner
 */
import HomeNavbar       from '../components/home/HomeNavbar'
import HomeFooter       from '../components/home/HomeFooter'
import InnerPageBanner  from '../components/shared/InnerPageBanner'
import ProjectCard      from '../components/projects/ProjectCard'
import { projects }     from '../data/homeData'

export default function ProjectsPage() {
  return (
    <div className="bg-bg-warm relative overflow-x-hidden">
      {/* Fixed floating nav — "Project" NavLink auto-highlights at /projects */}
      <HomeNavbar />

      <main>
        {/* 1. Banner */}
        <InnerPageBanner title="Projects" />

        {/* 2. Projects grid */}
        <section
          style={{
            paddingTop:    'clamp(40px, 4.2vw, 60px)',
            paddingBottom: 'clamp(60px, 6.9vw, 100px)',
          }}
          aria-label="All Projects"
        >
          <div
            className="max-w-[1440px] mx-auto"
            style={{ paddingInline: 'clamp(24px, 5.6vw, 80px)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[36px]">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <HomeFooter />
    </div>
  )
}
