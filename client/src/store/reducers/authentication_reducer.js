import {
  REQUEST_LOADING,
  REGISTRATION_SUCCESSFUL,
} from "../actions/action_types";

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
    case REGISTRATION_SUCCESSFUL:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
