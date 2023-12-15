import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Nav from './Nav'

function Header() {
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <header>
      <div className="header-container">
        <div className="title-container">
          <div className="logo">
            <Link to="/" className="title-link">
              <h1 className="header-title">Earth Mates</h1>
            </Link>
          </div>
          <div className="nav-container">
            <Nav />
          </div>
          <div className="user-container">
            <IfAuthenticated>
              <p className="user.">{user?.nickname}</p>
              <button className="button" onClick={() => logout()}>
                Logout
              </button>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <button className="button" onClick={() => loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })}>
                Login
              </button>
            </IfNotAuthenticated>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
