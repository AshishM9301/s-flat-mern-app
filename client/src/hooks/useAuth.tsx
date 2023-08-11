import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { LoginResponseData } from "../store/types";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/authSlice";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // call this function when you want to authenticate the user
  const loginAuth = async (data: LoginResponseData) => {
    // console.log(data.accessToken);
    dispatch(setUser(data));
    setToken(data.accessToken);
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
