import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import {Marker} from 'react-map-gl';
import axios from 'axios'
import { connect } from 'react-redux'
import './Map.css';


export class Map extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 35.0,
      longitude: -100.0,
      zoom: 3
    },
    fish: []
  };

  componentDidMount() {
    axios.post('https://fishing-app-backend-server.herokuapp.com/allfish',{
      userId: this.props.userId
    })
    .then(response => response.data)
    .then(data => {
      console.log(data)
      this.setState({
        fish: data
      })
    })
  }

  render() {

    let fishData = this.state.fish.map(data => {
      return (
        <Marker latitude={data.latitude} longitude={data.longitude} offsetLeft={-20} offsetTop={-10}><img src="fish.png"></img></Marker>
      )
    })

    return (
      <div className="mapBox">
      <ReactMapGL mapboxApiAccessToken='pk.eyJ1IjoiZ3ByaXpuYXIiLCJhIjoiY2p2cGpxYWM5MmE4NDQ4cWxiY3N0bTFlOSJ9.zjGnBTabn9sRQIZ6C2FjRw'
        {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport})}>
        {fishData}
      </ReactMapGL>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {

    userId: state.uid

  }
}

export default connect(mapStateToProps)(Map)
