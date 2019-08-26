import * as actionTypes from "../actions/actions";

const initialState = {
  searchField: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_SEARCHFIELD_CHANGE:
      return {
        ...state,
        searchField: action.nextLetter
      };

    default: {
      return state;
    }
  }
};

export default reducer;