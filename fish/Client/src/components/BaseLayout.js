import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export class Menu extends Component {

  render() {
    return(
      <ul>
        <li><button><NavLink to='/addnewfish'>Add Fish</NavLink></button></li>
        <li><button><NavLink to='/previousfishlist'>Previously Caught Fish</NavLink></button></li>
        <li><button><NavLink to='/weather'>Weather Forecast</NavLink></button></li>
        <li><button><NavLink to='/graph'>Graph Data</NavLink></button></li>
        <li><button><NavLink to='/heatmap'>Heat Map</NavLink></button></li>
        <li><button><NavLink to='/login'>Logout</NavLink></button></li>
      </ul>
    )
  }
}

export class BaseLayout extends Component {
  render () {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}
