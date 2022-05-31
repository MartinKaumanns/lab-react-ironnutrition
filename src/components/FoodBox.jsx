import React from 'react';
import Food from './Food';

const FoodBox = (props) => {
  const { foods, onAdd } = props;
  return (
    <div>
      {foods.map((food) => (
        <Food key={food.name} food={food} onAdd={onAdd}></Food>
      ))}
    </div>
  );
};

export default FoodBox;
