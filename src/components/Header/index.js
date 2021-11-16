import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {FaSuitcase} from 'react-icons/fa'
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
      <ul className="headBox">
        <li>
          <Link to="/" className="link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="headerImg"
            />
          </Link>
        </li>
        <li>
          <div className="butBox">
            <Link to="/" className="link">
              <li className="profile">Home</li>
            </Link>
            <Link to="/jobs" className="link">
              <li className="profile">Jobs</li>
            </Link>
          </div>
        </li>
        <li>
          <button type="button" className="logout" onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
      <ul className="mobileBox">
        <li>
          <Link to="/" className="link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="headerImg"
            />
          </Link>
        </li>
        <li>
          <div className="butBox">
            <Link to="/" className="link">
              <AiFillHome className="mobile-home " />
            </Link>
            <Link to="/jobs" className="link">
              <FaSuitcase className="mobile-suit" />
            </Link>
            <button type="button" className="mobile-but" onClick={onLogout}>
              <BiExit />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
