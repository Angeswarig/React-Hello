import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [changetheme,setChangeTheme]=useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center"
      }}
    >
      <h1> Learning Context API </h1>
      <p>Theme Toggler using Context API</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`
        }}  onClick={()=>{
          setChangeTheme(changetheme==="light"?"dark":"light")
        }}
      >
        CLick Me
      </button>
      
    </div>
  );
};

export default HeroSection;
