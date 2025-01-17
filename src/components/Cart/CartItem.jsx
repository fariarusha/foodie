import React from "react";
import classes from "./CartItem.module.css";
export default function CartItem(props) {
//   const price = `$${props.price.toFixed(2)}`;
  return (
    <div>
      <li className={classes["cart-item"]}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{props.price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    </div>
  );
}
