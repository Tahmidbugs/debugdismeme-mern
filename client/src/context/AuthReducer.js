const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
