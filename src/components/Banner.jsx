/**
 * Banner — Tostem project page hero banner.
 * Delegates to the shared InnerPageBanner.
 * Nav is rendered by TostemPage → HomeNavbar above this component.
 */
import InnerPageBanner from './shared/InnerPageBanner'

export default function Banner() {
  return <InnerPageBanner title="Tostem" subtitle="Cooperate website" />
}
