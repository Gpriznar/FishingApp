import React, { Component } from 'react'
// import {Registration} from './Registration'
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthenticationHeader } from '../utils/authenticate'
import './Login.css';


class Login extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      message: ''
    }
  }

  handleLoginClick = () => {

    axios.post('https://fishing-app-backend-server.herokuapp.com/login', {
      username: this.state.username,
      password: this.state.password
    }).then(response => {

      let token = response.data.token
      let id = response.data.id

      localStorage.setItem('jsonwebtoken', token)
      localStorage.setItem('userId', id)
      this.props.onAuthenticated(token, id)
      setAuthenticationHeader(token)
    }).catch(error => console.log(error))
  }


  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="loginbox">
        <h1> Welcome to Fishing Journal </h1>
        <h2>Login</h2>
        <p>If this is your first time using Fishing App please register before attempting to login</p>
        <div className="logininputsbox">
          <input className="logininputfield" name="username" onChange={this.handleTextBoxChange} placeholder="User Name"></input>
          <input className="logininputfield" name="password" onChange={this.handleTextBoxChange} placeholder="Password"></input>
          <button className="loginbutton" onClick={this.handleLoginClick}>Login</button>
          <label>{this.state.message}</label>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: (token, id) => dispatch({ type: 'ON_AUTHENTICATED', token: token, id: id })
  }
}

export default connect(null, mapDispatchToProps)(Login)
