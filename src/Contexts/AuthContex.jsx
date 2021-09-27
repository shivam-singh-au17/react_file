import { createContext, useState } from "react";

export const AuthContex = createContext({
  userLogin: "",
  handalLogin: () => {},
});

export default function AuthContexProvider({ children }) {
  const [userLogin, setUserLogin] = useState(false);
  const handalLogin = () => {
    setUserLogin(userLogin ? false : true);
  };
  return (
    <AuthContex.Provider value={{ userLogin: userLogin, handalLogin }}>
      {children}
    </AuthContex.Provider>
  );
}
