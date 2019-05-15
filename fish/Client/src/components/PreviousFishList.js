import React, {Component} from 'react'
import { connect } from 'react-redux'

class PreviousFishList extends Component {

  render() {

    const fishes = this.props.fish
    let fishData = fishes.map((fish) => {
      return <li key={fish.id}>
      <h2>{fish.fishname}</h2>
      <p>Weight: {fish.fishsize}</p>
      <p>Type of Lure/Bait: {fish.lurebait}</p>
      <p>Line Strength: {fish.linestrength}</p>
      <p>Type of rod: {fish.rod}</p>
      <p>Type of reel: {fish.reel}</p>
      <p>Weather Conditions: {fish.weather}</p>
      <a href={`https://www.latlong.net/c/?lat=${fish.latitude}&long=${fish.longitude}`}>Where did you catch this fish?</a>
      </li>
    })

    return(
      <div>
      <h1>Previous Catches</h1>
      <ul>{fishData}</ul>
      </div>
    )
  }

  deleteFish(fish) {

    let delId = {
        entryKey: fish.id
    }
    console.log(delId)
    fetch("http://localhost:8080/delete", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(delId)
    }).then(response => {
        if (response.status >= 400) {
            throw new Error("Error")
        }
        return response.json()

    }).then(delId => {
        if(delId === "success"){
            console.log("success")
      }
    })
  }
}


const mapStateToProps = (state) => {
  return {
    fish: state.fishes

  }
}

export default connect(mapStateToProps,null)(PreviousFishList)
