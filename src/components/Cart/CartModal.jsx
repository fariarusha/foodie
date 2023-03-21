import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}>{props.children}</div>;
}
function ModalOverlay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}
export default function CartModal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}
