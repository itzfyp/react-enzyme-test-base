import React, { useCallback, useMemo, useState } from "react";
import Validator from "./InputModelValidatorHook";

const InputHook = ({
  name = "inputName",
  type = "text",
  value = "enter value"
}) => {
  const [inputState, setInputState] = useState(value);
  console.log("InputHook");

  const onChangeHandler = useCallback(({ target }) => {
    console.log("updating onChnage handler", target.value);
    setInputState(target.value);
  }, []);

  return useMemo(() => {
    console.log("updating ui");
    return (
      <div>
        <input type={type} value={inputState} onChange={onChangeHandler} />
      </div>
    );
  }, [inputState]);
};

export default InputHook;
