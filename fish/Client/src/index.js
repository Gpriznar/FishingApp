import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducer from './store/reducer'
import requireAuth from './components/requireAuth'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddNewFish from './components/AddNewFish'
import BaseLayout from './components/BaseLayout'
import Login from './components/Login'
import {Weather} from './components/Weather'
import PreviousFishList from './components/PreviousFishList'
import Map from './components/Map'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path ='/' component={App} />
      <Route path ='/addnewfish' component={AddNewFish} />
      <Route path ='/previousfishlist' component={PreviousFishList} />
      <Route path ='/weather' component={Weather} />
      <Route path ='/heatmap' component={Map} />
    </Switch>
    </BaseLayout>
    </BrowserRouter>
  </Provider>
      , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
