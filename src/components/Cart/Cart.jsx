import React from "react";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartModal from "./CartModal";
export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  // const [hasItems, setHasItems] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  // if (cartCtx.items.length > 0) {
  //   return setHasItems(true);
  //   console.log(hasItems);
  // }
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const CartList = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={onAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <CartModal>
      {CartList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          cancel
        </button>
        {hasItem && <button className={classes.button}>order</button>}
      </div>
    </CartModal>
  );
}
