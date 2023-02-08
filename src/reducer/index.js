const initialState = {
  allCharacters: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;