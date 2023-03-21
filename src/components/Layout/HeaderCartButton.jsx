import React from "react";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cart-Context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
export default function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtxt = useContext(CartContext);
  const numberOfItems = cartCtxt.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  // const numberOfAmount = cartCtxt.totalITems;
  // console.log(numberOfItems, 'number of items');
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    setBtnIsHighlighted(true);
  }, []);

  return (
    <div>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
    </div>
  );
}
