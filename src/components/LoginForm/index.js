// Write your JS code here
import {Component} from 'react'

import './index.css'

class LogIn extends Component {
  state = {username: '', password: '', errorLogin: false}

  submitFormSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  errorMsg = () => {
    const errMsg = (
      <p className="error-msg">*username and password didn't match</p>
    )
    return errMsg
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = ' https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.submitFormSuccess()
    } else {
      this.setState({errorLogin: true})
    }
  }

  render() {
    const {errorLogin} = this.state
    return (
      <div className="login-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="login-form-cont">
          <div className="logo-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-logo"
            />
          </div>
          <form onSubmit={this.onSubmitForm}>
            <div className="input-cont">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <br />
              <input
                type="text"
                id="username"
                className="username-input"
                placeholder="Username"
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="input-cont">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="username-input"
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit" className="login-btn">
              LogIn
            </button>
          </form>
          {errorLogin ? this.errorMsg() : null}
        </div>
      </div>
    )
  }
}
export default LogIn
