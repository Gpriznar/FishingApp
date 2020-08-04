import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './BaseLayout.css';


class Menu extends Component {

  handleLogoutClick = () => {
    console.log(this.props.isAuthenticated)
    localStorage.removeItem('jsonwebtoken')
    this.props.logout()
    this.props.history.push('/')
    console.log('Log out successful')
  }


  render() {
    return (
      <div className="navMenu">
        <ul className="navUL">
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/addnewfish'>Add Fish</NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/previousfishlist'>View All Fish</NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/weather'>Weather Forecast</NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/heatmap'>Map</NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink" onClick={this.handleLogoutClick}><NavLink to='#'>Logout</NavLink></li> : null}
        </ul>
      </div>
    )
  }
}

class BaseLayout extends Component {
  render() {
    return (
      <div className="baselayoutbox">
        <Menu isAuthenticated={this.props.isAuthenticated} logout={this.props.onLogout} history={this.props.history} />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({ type: 'LOGOUT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BaseLayout))
