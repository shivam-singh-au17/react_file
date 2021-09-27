import React from "react";
import { useContext } from "react";
import { MyFirstContex } from "../../Contexts/MyFirstContex";
import { ThemeContexts } from "../../Contexts/ThemeContexts";

export default function Formindex() {
    
  const { theme, handleChangeTheme } = useContext(ThemeContexts);
  const age = useContext(MyFirstContex);

  return (
    <div className="container mt-5">
      <h1>Theme is: {theme}</h1>
      {age.map((e) => {
        return <h2>My Age is: {e}</h2>;
      })}

      <button className="btn btn-info" onClick={handleChangeTheme}>Click Here</button>
    </div>
  );
}
