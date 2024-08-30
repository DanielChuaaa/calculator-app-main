import React, { useState, useEffect } from "react";

function DisplayingNumber({ inputValue, isTheme, themeInput, themeText }) {
  const [isNumber, setIsNumber] = useState(false);

  useEffect(() => {
    if (inputValue === "") {
      setIsNumber(false);
    } else {
      setIsNumber(true);
    }
  }, [inputValue]);

  return (
    <>
      <p className={`${isNumber ? "numberInside" : "displayNumber"} ${themeInput[isTheme]} ${themeText[isTheme]} `}>{inputValue}</p>
    </>
  );
}

export default DisplayingNumber;
