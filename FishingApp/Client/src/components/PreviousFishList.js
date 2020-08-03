import React, { Component } from 'react'
import { connect } from 'react-redux'
import './PreviousFishList.css';

class PreviousFishList extends Component {
  constructor() {
    super()

    this.state = {
      fish: [],
      message: ""
    }
  }

  componentDidMount() {
    fetch(`https://fishing-app-backend-server.herokuapp.com/previousfishlist/${this.props.userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fish: data
        })
      })
  }



  render() {
    console.log(this.state.fish)
    const fishes = this.state.fish
    let fishData = fishes.map((fish) => {
      return <li className="fishLI" key={fish.id}>
        <h2>{fish.fishname}</h2>
        <p>Weight: {fish.fishsize}</p>
        <p>Type of Lure or Bait: {fish.lurebait}</p>
        <p>Line Strength: {fish.linestrength}</p>
        <p>Type of rod: {fish.rod}</p>
        <p>Type of reel: {fish.reel}</p>
        <p>Weather Conditions: {fish.weather}</p>
        <p>Time and Date: {fish.createdAt}</p>
        <a className="locationButton" href={`https://www.latlong.net/c/?lat=${fish.latitude}&long=${fish.longitude}`} rel='noopener noreferrer' target="_blank"><img alt='world' src="./worldwide.png" /></a>
        <button className="deleteButton" onClick={() => this.deleteFish(fish)}><img alt='clear' src="./clear.png" /></button>
      </li>
    })

    return (
      <div className="previousFishBox">
        <h1>Previous Catches</h1>
        <ul className="fishUL">{fishData}{this.state.message}</ul>
      </div>
    )
  }

  deleteFish(fish) {

    let delId = {
      entryKey: fish.id
    }
    console.log(delId)
    fetch("https://fishing-app-backend-server.herokuapp.com/delete", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(delId)
    }).then(response => {
      if (response.status >= 400) {
        throw new Error("Error")
      }
      return response.json()

    }).then(delId => {
      if (delId === "success") {
        this.setState({
          message: "Your fish has been deleted"
        })
      }
    })
  }
}


const mapStateToProps = (state) => {
  return {

    userId: state.uid

  }
}

export default connect(mapStateToProps)(PreviousFishList)
