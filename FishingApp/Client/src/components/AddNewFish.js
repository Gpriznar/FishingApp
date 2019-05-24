import React, {Component} from 'react'
import { connect } from 'react-redux'
import './AddNewFish.css';

class AddNewFish extends Component {
  constructor() {
    super()

    this.state={
      latitude: 0.0,
      longitude: 0.0,
      fishname: '',
      fishsize: '',
      lurebait: '',
      linestrength: '',
      rod: '',
      reel: '',
      weather: '',
      message: '',
    }
  }


  handleAddCatchClick = () => {
    fetch('http://localhost:8080/api/addnewfish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        fishname: this.state.fishname,
        fishsize: this.state.fishsize,
        lurebait: this.state.lurebait,
        linestrength: this.state.linestrength,
        rod: this.state.rod,
        reel: this.state.reel,
        weather: this.state.weather,
        userId: this.props.id
      })
    }).then(response => response.json())
    .then(result => {
      if(result.success) {
        this.setState({
          message: result.message
        })
      }
    })
    .then(()=> this.props.addedFish(this.state))
  }

  componentDidMount() {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      })
    }
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div className="newFishBox">
        <h1 className="congratsText">Congratulations! You caught a fish!</h1>
        <p>Fill out as much or as alittle of the following form to save your catch in our database. The app will automatically save your GPS coordinates and time of day when you submit the form</p>
          <div className="newFishInput">
          <input className="fishInput" name="fishname" onChange={this.handleTextBoxChange} placeholder="Name or Species of Fish"></input>
          <input className="fishInput" name="lurebait" onChange={this.handleTextBoxChange} placeholder="Type of Lure or Bait"></input>
          <input className="fishInput" name="linestrength" onChange={this.handleTextBoxChange} placeholder="Line Strength"></input>
          <input className="fishInput" name="rod" onChange={this.handleTextBoxChange} placeholder="Type of Rod"></input>
          <input className="fishInput" name="reel" onChange={this.handleTextBoxChange} placeholder="Type of Reel"></input>
          <input className="fishInput" name="fishsize" onChange={this.handleTextBoxChange} placeholder="Size of your fish"></input>
          <input className="fishInput" name="weather" onChange={this.handleTextBoxChange} placeholder="Current Weather Conditions"></input>
          <button className="fishButton" onClick={this.handleAddCatchClick}>Save Catch!</button>
          <label>{this.state.message}</label>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.uid
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addedFish: (fish) => dispatch({type: 'ADDEDFISH', value: fish})

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewFish)
