import React, { useRef } from "react";

import classes from "./AddMeal.module.css";

function AddMeal(props) {
  const nameRef = useRef("");
  const priceRef = useRef("");
  const descriptionRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const meal = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
    };

    props.onAddMeal(meal);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="price">Price</label>
        <textarea rows="5" id="price" ref={priceRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={descriptionRef} />
      </div>
      <button>Add Meal</button>
    </form>
  );
}

export default AddMeal;
