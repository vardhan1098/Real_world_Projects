import React, { useState, useEffect } from "react";
import "./index.css";

function Theme() {
  const [isTheme, setIsTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsTheme(savedTheme === "light");
    }
  }, []);

  const handleToogle = () => {
    setIsTheme(!isTheme);
    localStorage.setItem("theme", !isTheme ? "light" : "dark");
  };

  return (
    <div className={`${isTheme ? "light" : "dark"}`}>
      <h2>Theme Provider</h2>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla maiores
        fuga animi tempora repellat nam exercitationem possimus dolorum officiis
        quidem quisquam hic tenetur, in aliquam et fugit voluptate illum iste?
      </h1>
      {/* Toggle Switch */}
      <label className="toggle-switch">
        <input type="checkbox" checked={isTheme} onChange={handleToogle} />
        <span className="slider">
          <span className="icon">{isTheme ? "🌞" : "🌙"}</span>
        </span>
      </label>
    </div>
  );
}

export default Theme;
