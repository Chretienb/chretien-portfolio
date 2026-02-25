import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-desc">Page not found.</p>
      <Link to="/" className="not-found-link">
        ← Back to home
      </Link>
    </div>
  )
}

export default NotFoundPage
