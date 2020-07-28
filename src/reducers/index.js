import { initialState } from "./initial-state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };

    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        users: [],
        loading: true,
        error: null,
      };

    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        users: [],
        loading: false,
        error: action.payload,
      };
    
    case "UPDATE_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;