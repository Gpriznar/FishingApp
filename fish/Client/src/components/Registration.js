import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthenticationHeader } from '../utils/authenticate'

export class Registration extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleRegistrationClick = () => {
    fetch('http://localhost:8080/registration', {
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
      <div>
      <h1>Register</h1>
      <p>Please use a valid email account to register</p>
      <input name="email" onChange={this.handleTextBoxChange} placeholder="Email Address"></input>
      <input name="username" onChange={this.handleTextBoxChange} placeholder="User Name"></input>
      <input name="password" onChange={this.handleTextBoxChange} placeholder="Password"></input>
      <button onClick={this.handleRegistrationClick}>Register</button>
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
