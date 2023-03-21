import React from "react";
import { Fragment } from "react";
import headerImage from "../../assets/Images/brooke-lark-jUPOXXRNdcA-unsplash.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} />
      </div>
    </Fragment>
  );
}
