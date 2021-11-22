import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import SignUp from '../SignUp'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', errorPresent: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitError = error => {
    this.setState({errorPresent: true, errorMsg: error})
  }

  SubmitFrom = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitError(data.error_msg)
    }
  }

  render() {
    const {errorMsg, errorPresent} = this.state
    const present = Cookies.get('jwt_token')
    if (present) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginContainer">
        <div className="jobBox">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="jobImg"
          />
          <form className="formContainer" onSubmit={this.SubmitFrom}>
            <label htmlFor="username" className="jobLabel">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="jobInput"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="jobLabel">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="jobInput"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="jobBut">
              Login
            </button>
            {errorPresent && <p className="errorMsg">*{errorMsg}</p>}
            <Link to="/signup" className="linkSign">
              <p className="signUp">Sign Up??</p>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
