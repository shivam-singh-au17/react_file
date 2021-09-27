import React, { createContext, useState } from "react";

export const ThemeContexts = createContext({
  theme: "",
  handleChangeTheme: () => {},
});

export default function Theme({ children }) {
  const [theme, setTheme] = useState("info");

  const handleChangeTheme = () => {
    setTheme(theme === "info" ? "dark" : "info");
  };
  return (
    <ThemeContexts.Provider value={{ theme: theme, handleChangeTheme }}>
      {children}
    </ThemeContexts.Provider>
  );
}
 