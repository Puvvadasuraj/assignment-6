import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class SignUp extends Component {
  state = {
    status: false,
    mail: '',
    password: '',
    rePassword: '',
    msg: '',
  }

  onSuccess = () => {
    const {mail} = this.state
    return (
      <div className="formContainerSignUp">
        <h1>
          You will receive a mail for this{' '}
          <span className="mailItem">{mail}</span> Mail id.Please confirm your
          mail Id
        </h1>
        <button type="button" className="buttonSignUp" onClick={this.onBack}>
          Back
        </button>
      </div>
    )
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeRePassword = event => {
    this.setState({rePassword: event.target.value})
  }

  changeMail = event => {
    this.setState({
      mail: event.target.value,
    })
  }

  onFilling = () => {
    const {mail, msg} = this.state
    return (
      <>
        <h1>Sign Up</h1>
        <form className="formContainerSignUp">
          <div className="inputBox">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input type="text" id="name" />
          </div>
          <div className="inputBox">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              id="email"
              onChange={this.changeMail}
              value={mail}
            />
          </div>
          <div className="inputBox">
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input type="password" id="password" />
          </div>
          <div className="inputBox">
            <label className="label" htmlFor="rPassword">
              Re-enter Password:
            </label>
            <input type="password" id="rPassword" />
          </div>
          <p>*{msg}</p>
          <button
            type="button"
            className="buttonSignUp"
            onClick={this.onSubmit}
          >
            Submit
          </button>
          <Link to="/login" className="linkLogin">
            <p>Login??</p>
          </Link>
        </form>
      </>
    )
  }

  onSubmit = () => {
    this.setState({status: true, msg: ''})
  }

  onBack = () => {
    this.setState({status: false})
  }

  render() {
    const {status} = this.state
    return (
      <>
        <div className="signUpContainer">
          {!status && this.onFilling()}
          {status && this.onSuccess()}
        </div>
      </>
    )
  }
}

export default SignUp
