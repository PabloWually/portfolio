import React, { useEffect, useState } from "react";
import { TiStarburst } from "react-icons/ti";
import "./Utils.css"

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_theme" onClick={themetoggle}>
      <TiStarburst />
    </div>
  );
};

export default Themetoggle;