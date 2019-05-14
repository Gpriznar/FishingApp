import React, {Component} from 'react'
import { connect } from 'react-redux'

export class PreviousFishList extends Component {

  render() {

    const records = this.props.records
    let recordItems = records.map((record) => {
      return <li key={record.id}>
      <a href={`https://www.latlong.net/c/?lat=${record.latitude}&long=${record.longitude}`}>{record.latitude}, {record.longitude}</a>
      // <p>{record.fishname},{record.fishsize}, {record.lurebait}, {record.linestrength}, {record.rod}, {record.reel}, {record.weather}</p>
      </li>
    })

    return(
      <div>
      <h1>Previous Catches</h1>
      <ul>{recordItems}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fish: state.fishes

  }
}
