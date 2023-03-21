import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import React, { useState, useEffect, useCallback } from "react";
import MealItem from "./MealItem/MealItem";
import AddMeal from "./AddMeal";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-b40c1-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();

      let loadMeals = [];

      for (const key in data) {
        loadMeals.push({
          id: key,
          description: data[key].description,
          name: data.name,
          price: data.price,
        });
      }
      // const renameMovieVariables = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      setMeals(loadMeals);
      // console.log(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  async function addMealHandler(meal) {
    const response = await fetch(
      "https://react-http-b40c1-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
      {
        method: "POST",
        body: JSON.stringify(meal),
        headers: {
          "Content-Type": "application/JSON",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchMealsHandler();
  }, []);


  return (

    <div className={classes.meals}>
      <section>
        <AddMeal onAddMeal={addMealHandler} />
      </section>
      <Card>
      {!isLoading && <MealItem mealList={mealList} />}
        {/* <ul>{mealList}</ul> */}
      </Card>
    </div>
  );
}

export default AvailableMeals;
