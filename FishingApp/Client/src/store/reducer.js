const initialState = {
  isAuthenticated: false,
  fishes: [],
  uid: 0,
  currentWeather: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ON_AUTHENTICATED':
    return {
      ...state,
      isAuthenticated: action.token !=null ? true : false,
      uid: action.id
    }
    case 'ADDEDFISH':
    return {
      ...state,
      fishes: state.fishes.concat(action.value)
    }
    case 'LOGOUT':
    return {
      ...state,
      isAuthenticated: false
    }
    case 'CURRENTWEATHER':
    return {
      ...state,
      currentWeather: state.currentWeather.concat(action.value)
    }
  }
  return state
}

export default reducer
