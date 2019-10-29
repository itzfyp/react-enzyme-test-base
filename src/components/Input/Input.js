import React, { memo } from "react";
import Style from "./Input.module.scss";

const Input = memo(props => {
  const onChangeHandler = e => {
    const val = e.target.value;
    props.cbChange(val, props.name);
  };
  return (
    <div className={Style.Input}>
      <label>{props.placeholder}</label>
      <input
        className={Style.inputControl}
        type={props.type}
        value={props.value}
        onChange={onChangeHandler}
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default Input;
