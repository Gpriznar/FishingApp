import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthenticationHeader } from '../utils/authenticate'
import './Registration.css';

class Registration extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      message: ''
    }
  }

  handleRegistrationClick = () => {
    fetch('https://fishing-app-backend-server.herokuapp.com/registration', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => response.json())
    .then(result => {
      console.log(result)
      if(result.success) {
        this.setState({
          message: result.message
        })
      }
    })
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return(
      <div className="registrationbox">
      <h2>Register</h2>
      <p>Please use a valid email account to register</p>
        <div className="registrationinputsbox">
          <input className="registrationinputfield" name="email" onChange={this.handleTextBoxChange} placeholder="Email Address"></input>
          <input className="registrationinputfield" name="username" onChange={this.handleTextBoxChange} placeholder="User Name"></input>
          <input className="registrationinputfield" name="password" onChange={this.handleTextBoxChange} placeholder="Password"></input>
          <button className="registrationbutton" onClick={this.handleRegistrationClick}>Register</button>
          <label className="registrationSuccess">{this.state.message}</label>
        </div>
        <label className="registrationSuccess">{this.state.message}</label>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: (token) => dispatch ({type: 'ON_AUTHENTICATED', token: token})
  }
}
export default connect(null, mapDispatchToProps)(Registration)
