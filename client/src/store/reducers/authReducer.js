import { REQUEST_LOADING, SET_CURRENT_USER } from "../actions/action_types";
import isEmpty from "../../validation/is-empty";

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
