import React, {Component} from 'react';
import Login from './components/Login'
import Registration from './components/Registration'
import './App.css';

class App extends Component {

    render() {
      return (
        <div>
        <Login />
        <Registration />
        </div>
      )
    }
}

export default App;
