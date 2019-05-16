import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './Weather.css';

class Weather extends Component {
  constructor() {
    super()

    this.state = {
      zipcode: 0,
      weather: []
    }
  }



  handleWeatherClick = () =>{

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode},us&units=imperial&appid=3226cf76708d38911413730b921d802c`,{crossdomain:true})
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

    const weatherinfo = this.state.weather.map((info, index) => {
      if (index == 0 || index == 8 || index == 16)

      {return(
          <div className='weatherList' >
          <ul>
          <li className= 'weatherListItems'>
          <p>Date/Time: {info.dt_txt}</p>
          <p>Current Temperature: {info.main.temp}°</p>
          <p>Temperature High: {info.main.temp_max}°</p>
          <p>Temperature Low: {info.main.temp_min}°</p>
          <p>Humidity: {info.main.humidity}</p>
          <p>Atmospheric Pressure: {info.main.pressure} mbar</p>
          <p>Weather Conditions: {info.weather[0].main}</p>
          <p>Weather Details: {info.weather[0].description}</p>
          <p>Wind Speed: {info.wind.speed} mph</p>
          </li>
          </ul>
          </div>
      )
    }
  })

    return(
      <div className="weatherSearch">
      <h1>Weather Forecast</h1>
      <input name="zipcode" onChange={this.handleTextBoxChange} placeholder="Enter Zipcode"></input>
      <button onClick={this.handleWeatherClick}>Submit</button>
      {weatherinfo}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

    weather: state.currentWeather

  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    dispatchWeather: (weather) => {dispatch({type: 'CURRENTWEATHER', value: weather})
    }
  })
}

export default connect(null, mapDispatchToProps)(Weather)
