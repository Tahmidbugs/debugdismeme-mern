import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
const INITIAL_STATE = {
  isAuthenticated: false,
  user: {
    _id: "62eff243d3a927149c7a90bd",
    fullname: "yahya bint shaghz",
    username: "yahyabinte",
    email: "yahyabinte@gmail.com",
    password: "$2b$10$ZWXrEVMgIKD9puin1egYKu5PKu4VOVV9XIY5hcmhF13CJTjOQGsIa",
    profilePicture:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    coverPicture:
      "https://timelinecovers.pro/facebook-cover/download/life-cycle-facebook-cover.jpg",
    followers: [],
    following: [],
    isAdmin: false,
    bio: "",
    posts: [],
    createdAt: {
      $date: {
        $numberLong: "1659892292063",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1659892292063",
      },
    },
    __v: 0,
  },
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
