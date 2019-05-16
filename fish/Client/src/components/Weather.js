import React, {Component} from 'react'
import axios from 'axios'

export class Weather extends Component {
  constructor() {
    super()

    this.state = {
      zipcode: 0,
      weather: []
    }
  }


  handleWeatherClick = () =>{

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode},us&APIID=1a58f63ba901c71f51ab6e02fdfe37e2`)
    .then(response => {
      console.log(response)
      this.setState({weather: response.data.list})
    })
  }


  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {

    const weatherinfo = this.state.weather.map((info) => {
      return(
          <div>
          <p>{info.temp}</p>
          </div>
      )
  })

    return(
      <div>
      <h1>Weather Forecast</h1>
      <input name="zipcode" onChange={this.handleTextBoxChange} placeholder="Enter Zipcode"></input>
      <button onClick={this.handleWeatherClick}>Submit</button>
      </div>
    )
}
}
