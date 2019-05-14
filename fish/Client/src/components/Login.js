import React, {Component} from 'react'
import {Registration} from './Registration'
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthenticationHeader } from '../utils/authenticate'

export class Login extends Component {

    constructor() {
      super()

      this.state = {
        username: '',
        password: ''
      }
    }

    handleLoginClick = () => {

      axios.post('http://localhost:8080/login', {
        username: this.state.name,
        email: this.state.email,
        password: this.state.password
      }).then(response => {

        let token = response.data.token
        console.log(token)

        localStorage.setItem('jsonwebtoken', token)
        this.props.onAuthenticated(token)
        setAuthenticationHeader(token)
      }).catch(error => console.log(error))
    }


    handleTextBoxChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  render() {
    return(
      <div>
      <h1>Login</h1>
      <p>If this is your first time using Fishing App please register before attempting to login</p>
      <input name="username" onChange={this.handleTextBoxChange} placeholder="User Name"></input>
      <input name="password" onChange={this.handleTextBoxChange} placeholder="Password"></input>
      <button onClick={this.handleLoginClick}>Login</button>
      <Registration />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: (token) => dispatch({type: 'ON_AUTHENTICATED', token:token})
  }
}

export default connect(null, mapDispatchToProps)(Login)
