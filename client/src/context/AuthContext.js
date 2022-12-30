import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
console.log("hehe:", loggedInUser);
const INITIAL_STATE = {
  isAuthenticated: false,
  user: loggedInUser,
  isFetching: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
