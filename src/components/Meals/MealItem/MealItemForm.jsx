import React from "react";
import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
export default function MealItemForm(props) {
  const [errorMessage, setErrorMessage] = useState(true);
  const amountUsedRefs = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const amountEntered = amountUsedRefs.current.value;
    const enteredAmountNumber = +amountEntered;
    console.log(amountEntered);
    if (amountEntered.trim().length === 0 || enteredAmountNumber < 1) {
      setErrorMessage(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form} action="">
        <Input
          label="Amount"
          ref={amountUsedRefs}
          input={{
            id: 'amount_' + props.id,
            type:"number",
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button>Add +</button>
        {!errorMessage && <p>Input is not valid</p>}
      </form>
    </div>
  );
}
