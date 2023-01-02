export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      console.log("LOGIN START CALLED");
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("loggedIn", JSON.stringify(action.payload));
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      console.log("LOGIN FAILURE CALLED");
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("loggedIn");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "REGISTERED": {
      console.log("REGISTERED", action.payload);
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
