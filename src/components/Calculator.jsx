import { useState } from "react";
import Navbar from "./Navbar";
import DisplayingNumber from "./DisplayingNumber";
import InputNumber from "./InputNumber";

function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [isTheme, setIsTheme] = useState(0);
  const themeClases = ["bg1", "bg2", "bg3"];
  const themeTextUpperNav = ["toggleNumber1", "toggleNumber2", "toggleNumber3"];
  const themeTextNav = ["navWrapper1", "navWrapper2", "navWrapper3"];
  const themeInput = ["themeInput1", "themeInput2", "themeInput3"];
  const themeText = ["themeText1", "themeText2", "themeText3"];
  const themeCalculator = ["themeCalc1", "themeCalc2", "themeCalc3"];
  const themeButton = ["primaryButton1", "primaryButton2", "primaryButton3"];
  const themeButton2 = ["secondaryButton1", "secondaryButton2", "secondaryButton3"];
  const themeButton3 = ["thirdButton1", "thirdButton2", "thirdButton3"];

  const changeTheme = () => {
    setIsTheme((isTheme + 1) % 3);
  };

  return (
    <>
      <div className={`containerr ${themeClases[isTheme]}`}>
        <div className="calculator">
          <Navbar changeTheme={changeTheme} isTheme={isTheme} themeTextUpperNav={themeTextUpperNav} themeTextNav={themeTextNav} />
          <main>
            <div className="flexx">
              <DisplayingNumber inputValue={inputValue} isTheme={isTheme} themeInput={themeInput} themeText={themeText} />
              <InputNumber
                inputValue={inputValue}
                setInputValue={setInputValue}
                isTheme={isTheme}
                themeCalculator={themeCalculator}
                themeButton={themeButton}
                themeButton2={themeButton2}
                themeButton3={themeButton3}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Calculator;
