import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { LoginResponseData } from "../store/types";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/authSlice";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUserData] = useState<LoginResponseData>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // call this function when you want to authenticate the user
  const loginAuth = (data: LoginResponseData) => {
    // console.log(data.accessToken);
    dispatch(setUser(data));
    setToken(data.accessToken);
    setUserData(data?.data);
    if (data.data.role === "Admin") {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  // call this function to sign out logged in user
  const logout = () => {
    setToken(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      token,
      user,
      loginAuth,
      logout,
    }),
    [token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
