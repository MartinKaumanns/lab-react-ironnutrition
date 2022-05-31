import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import TodaysFood from './components/TodaysFood';
import AddFood from './components/AddFood';
import Search from './components/Search';
import Foods from './foods.json';

function App() {
  const [todaysItems, setTodaysItems] = useState([]);
  const [foods, setFoods] = useState(Foods);

  const onAdd = (food) => {
    const exist = todaysItems.find((x) => x.name === food.name);

    if (exist) {
      setTodaysItems(
        todaysItems.map((x) =>
          x.name === food.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setTodaysItems([...todaysItems, { ...food, qty: 1 }]);
    }
    console.log(todaysItems);
  };

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
  };

  /*  const onAdd = (event) => {
    event.preventDefault();
    console.log(event);
  }; */

  return (
    <div>
      <h1 className="App-header">Iron Nutrition</h1>
      <AddFood addFood={addNewFood} />
      <Search foods={foods} setFoods={setFoods} />

      <div className="columns">
        <div className="column">
          <FoodBox onAdd={onAdd} foods={foods} />
        </div>
        <div className="column">
          <TodaysFood onAdd={onAdd} todaysItems={todaysItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
