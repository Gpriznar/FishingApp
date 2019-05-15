const initialState = {
  isAuthenticated: false,
  fishes: [],
  uid:0
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
  }
  return state
}

export default reducer
