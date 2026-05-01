import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <div className="grid-bg" />
      <div className="scanline" />
      <div className="layout">
        <a href="#main" className="skip-link">Skip to main content</a>
        <header className="layout-header" role="banner">
          <Nav />
        </header>
        <main id="main" role="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
