import React, { Component } from 'react';
import Login from './components/Login'
import Registration from './components/Registration'
import { connect } from 'react-redux';
import LandingPage from './components/LandingPage';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="loginBox">
        {!this.props.isAuthenticated ? (<div>
          <Login />
          <Registration />
        </div>) :
          <LandingPage />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App);
