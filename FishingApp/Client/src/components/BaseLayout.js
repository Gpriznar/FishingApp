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
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/home'><button>Home</button></NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/addnewfish'><button>Add Fish</button></NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/previousfishlist'><button>View All Fish</button></NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/weather'><button>Weather Forecast</button></NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink"><NavLink to='/heatmap'><button>Map</button></NavLink></li> : null}
          {this.props.isAuthenticated ? <li className="navLink" onClick={this.handleLogoutClick}><NavLink to='#'><button>Logout</button></NavLink></li> : null}
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
