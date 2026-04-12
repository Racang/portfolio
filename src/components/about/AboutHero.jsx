/**
 * AboutHero — delegates to the shared InnerPageBanner.
 * Nav is rendered by the parent (AboutPage → HomeNavbar).
 */
import InnerPageBanner from '../shared/InnerPageBanner'

export default function AboutHero() {
  return <InnerPageBanner title="About" />
}
