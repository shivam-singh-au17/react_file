// import react from "react";
import { createContext, useState } from "react";

export const AuthContex = createContext();

const AuthContexProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handalLogin = ({ username, password }) => {
    if (username === "s" && password === "s") {
      setIsAuth(true);
    } else {
      alert("Somthing Wrong");
    }
  };

  const handleSignOut = () => {
    setIsAuth(false);
  };

  const value = { isAuth, handalLogin, handleSignOut };

  return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>;
};

export { AuthContexProvider };