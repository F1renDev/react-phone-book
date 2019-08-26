import * as actionTypes from "../actions/actions";

const initialState = {
  monsters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_DID_FETCH:
      return{
          ...state,
          monsters: action.users
      }

    default: {
      return state;
    }
  }
};

export default reducer;
