import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaHome} from 'react-icons/fa'
import {GiSuitcase} from 'react-icons/gi'
import {BiExit} from 'react-icons/bi'
import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav>
      <div className="headBox">
        <Link to="/" className="link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="headerImg"
          />
        </Link>
        <ul className="butBox">
          <Link to="/" className="link">
            <li className="profile">Home</li>
          </Link>
          <Link to="/jobs" className="link">
            <li className="profile">Jobs</li>
          </Link>
        </ul>
        <button type="button" className="logout" onClick={onLogout}>
          Logout
        </button>
      </div>
      <div className="mobileContent">
        <Link to="/" className="link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="headerImg"
          />
        </Link>
        <ul className="butBox">
          <Link to="/" className="link">
            <li className="profile">Home</li>
          </Link>
          <Link to="/" className="link">
            <li className="profile">Jobs</li>
          </Link>
        </ul>
        <button type="button" className="logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
