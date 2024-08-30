import React from "react";

function InputNumber({ inputValue, setInputValue, isTheme, themeCalculator, themeButton, themeButton2, themeButton3 }) {
  const onClick = (event) => {
    event.preventDefault();
    let newValue = event.target.value;

    setInputValue((prevValue) => prevValue + newValue);
  };

  const onDelete = (event) => {
    event.preventDefault();
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleOperator = (operator) => (event) => {
    event.preventDefault();
    let newValue = event.target.value;
    setInputValue((prevValue) => prevValue + `${operator}` + newValue);
  };

  const onReset = () => {
    setInputValue("");
  };

  const onEquals = (event) => {
    event.preventDefault();
    try {
      const result = eval(inputValue);
      setInputValue(String(result));
    } catch (error) {
      setInputValue("Error");
    }
  };

  return (
    <>
      <div className={`gridWrapper ${themeCalculator[isTheme]}`}>
        <button value={7} onClick={onClick} className={`${themeButton[isTheme]}`}>
          7
        </button>
        <button value={8} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          8
        </button>
        <button value={9} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          9
        </button>
        <button onClick={onDelete} className={`${themeButton2[isTheme]}`}>
          DEL
        </button>

        <button value={4} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          4
        </button>
        <button value={5} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          5
        </button>
        <button value={6} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          6
        </button>
        <button onClick={handleOperator("+")} className={` ${themeButton[isTheme]}`}>
          +
        </button>

        <button value={1} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          1
        </button>
        <button value={2} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          2
        </button>
        <button value={3} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          3
        </button>
        <button onClick={handleOperator("-")} className={` ${themeButton[isTheme]}`}>
          -
        </button>

        <button onClick={handleOperator(".")} className={` ${themeButton[isTheme]}`}>
          .
        </button>
        <button value={0} onClick={onClick} className={` ${themeButton[isTheme]}`}>
          0
        </button>
        <button onClick={handleOperator("/")} className={` ${themeButton[isTheme]}`}>
          /
        </button>
        <button onClick={handleOperator("*")} className={` ${themeButton[isTheme]}`}>
          x
        </button>

        <button onClick={onReset} className={`resetButton ${themeButton2[isTheme]}`}>
          Reset
        </button>
        <button onClick={onEquals} className={`equalsButton ${themeButton3[isTheme]}`}>
          =
        </button>
      </div>
    </>
  );
}

export default InputNumber;
