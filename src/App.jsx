import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Foods from './foods.json';
import FoodBox from './components/FoodBox';
import TodaysFood from './components/TodaysFood';
import AddFood from './components/AddFood';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(Foods);
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [todaysItems, setTodaysItems] = useState([]);

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
    /*  setFilteredFoods(updatedFoods); */
    setFoods(updatedFoods);
  };
  return (
    <div>
      <h1 className="App-header">Iron Nutrition</h1>
      <AddFood addFood={addNewFood} />
      <Search
        foods={foods}
        setFoods={setFoods}
        filteredFoods={filteredFoods}
        setFilteredFoods={setFilteredFoods}
      />

      <div className="columns">
        <div className="column">
          <FoodBox onAdd={onAdd} foods={filteredFoods} />
        </div>
        <div className="column">
          <TodaysFood onAdd={onAdd} todaysItems={todaysItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
