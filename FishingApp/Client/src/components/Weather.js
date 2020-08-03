import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import moment from 'moment'
import './Weather.css';


class Weather extends Component {
  constructor() {
    super()

    this.state = {
      zipcode: 0,
      weather: [],
      loading: false
    }
  }


  handleWeatherClick = () => {
    this.setState({
      loading: true
    })
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode},us&units=imperial&appid=3226cf76708d38911413730b921d802c`, { crossdomain: true })
      .then(response => {
        // console.log(response.data.list)
        this.setState({ weather: response.data.list, loading: false })
      })
    console.log(this.state.loading)

  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  render() {


    const weatherInfo = this.state.weather.map((info, index) => {

      if (index === 0 || index === 8 || index === 16) {
        return (

          <div key={index} className='forecasts'>
            <div className='weather-icon'>
              <img alt='weather' src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@4x.png`} />
            </div>
            <ul>
              <li>
                <div className='forcast-box'>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Date: <p>{moment(info.dt_txt).format('MM/DD/YYYY')}</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Time: <p>{moment(info.dt_txt).format('h:mm A')}</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Current Temperature: <p>{info.main.temp}°</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Temperature High: <p>{info.main.temp_max}°</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Temperature Low: <p>{info.main.temp_min}°</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Humidity: <p>{info.main.humidity}</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Atmospheric Pressure: <p>{info.main.pressure} mbar</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Weather Conditions: <p>{info.weather[0].main}</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Weather Details: <p>{info.weather[0].description}</p>
                    </div>
                  </div>
                  <div className='forcast-flexing'>
                    <div className='forcast-styling'>
                      Wind Speed: <p>{info.wind.speed} mph</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )
      }
    })


    return (
      <div className='complete-submit'>
        <h1>Weather Forecast</h1>
        <div className="forecast-submit">
          <input name="zipcode" onChange={this.handleTextBoxChange} placeholder="Enter Zipcode"></input>
          <button onClick={this.handleWeatherClick}>Submit</button>
        </div>
        <div className='display-forecasts'>
          {this.state.loading === true ? (<div>Running outside to check, brb</div>) : null}
          {weatherInfo}
        </div>
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
    dispatchWeather: (weather) => {
      dispatch({ type: 'CURRENTWEATHER', value: weather })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
