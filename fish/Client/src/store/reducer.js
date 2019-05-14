const initialState = {
  isAuthenticated: false,
  fishes: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ON_AUTHENTICATED':
    return {
      ...state,
      isAuthenticated: action.token !=null ? true : false
    }
    case 'ADDEDFISH':
    return {
      ...state,
      fishes: state.fishes.concat(action.value)
    }
  }
  return state
}

export default reducer
