// A Hook to validate : TODO
import { useCallback, useState } from "react";

const Validator = () => {
  console.log("Start : 2 Validator function");
  const [inputState, setInputState] = useState();

  return useCallback(value => {
    console.log("2. useCallback", value);
    setInputState(inputState + value);
  });
};

export default Validator;
