
import React, { useState } from "react";
import "./App.css";

function App(){
     const [isDark,setIswhite]= useState(false);

     function dogTheme(){
      setIswhite(!isDark)
     }

     return(

            <div className={`app-Contioner  ${isDark ?"dark":"light"}`}>
              <h1>{isDark? "Dark Mode" :"Light Mode"}</h1>
              <button onClick={dogTheme} className="theme-Button">
                Switch Theme
              </button>

            </div>

     );

}

export default App
