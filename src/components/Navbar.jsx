import React, { useState } from "react";

function Navbar({ changeTheme, isTheme, themeTextNav, themeTextUpperNav }) {
  const [animIndex, setAnimIndex] = useState(0);

  const animClases = ["toggleButtonAnim1", "toggleButtonAnim2", "toggleButtonAnim3"];

  const toggleAnim = () => {
    setAnimIndex((animIndex + 1) % 3);
  };
  return (
    <>
      <nav>
        <div className={`${themeTextUpperNav[isTheme]}`}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className={`navWrapper ${themeTextNav[isTheme]}`}>
          <h1>calc</h1>
          <div className="theme">
            <p>THEME</p>
            <div className="toggleTheme">
              <button
                className={`${animClases[animIndex]}`}
                onClick={() => {
                  changeTheme();
                  toggleAnim();
                }}
              ></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
