import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input type={props.input.type} ref={ref} id={props.input.id} {...props.id} />
    </div>
  );
});

export default Input;
