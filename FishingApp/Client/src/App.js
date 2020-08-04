import React, { Component } from 'react';
import Login from './components/Login'
import Registration from './components/Registration'
import { connect } from 'react-redux';
import Home from './components/Home';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="loginBox">
        {!this.props.isAuthenticated ? (<div>
          <Login />
          <Registration />
        </div>) :
          <Home />
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
