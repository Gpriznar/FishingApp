import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


class Menu extends Component {

  handleLogoutClick = () => {
    console.log(this.props.isAuthenticated)
    localStorage.removeItem('jsonwebtoken')
    this.props.logout()
    this.props.history.push('/')
    console.log('Log out successful')
  }

  render() {
    return(
      <ul>
        {this.props.isAuthenticated ? <li><button><NavLink to='/addnewfish'>Add Fish</NavLink></button></li> : null }
        {this.props.isAuthenticated ? <li><button><NavLink to='/previousfishlist'>Previously Caught Fish</NavLink></button></li> : null }
        {this.props.isAuthenticated ? <li><button><NavLink to='/weather'>Weather Forecast</NavLink></button></li> : null }
        {this.props.isAuthenticated ? <li><button><NavLink to='/heatmap'>Heat Map</NavLink></button></li> : null }
        {this.props.isAuthenticated ? <li><button onClick ={this.handleLogoutClick}><NavLink to='#'>Logout</NavLink></button></li> : null }
      </ul>
    )
  }
}

class BaseLayout extends Component {
  render () {
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} logout={this.props.onLogout} history={this.props.history}/>
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
    onLogout: () => dispatch({type: 'LOGOUT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BaseLayout))
