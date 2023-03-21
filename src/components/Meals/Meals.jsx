import React from "react";
import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummery from "./MealSummery";
export default function Meals() {
  return (
    <Fragment>
      <MealSummery />
      <AvailableMeals />
    </Fragment>
  );
}
