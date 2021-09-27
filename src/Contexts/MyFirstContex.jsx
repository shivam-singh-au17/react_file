import { createContext } from "react";

export const MyFirstContex = createContext([]);
export default function MyFirstContexProvider({ children }) {
  return (
    <MyFirstContex.Provider value={[1, 2, 3, 4, 5, 6]}>
      {children}
    </MyFirstContex.Provider>
  );
}
