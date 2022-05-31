import React from 'react';

const TodaysFood = (props) => {
  const { todaysItems, onAdd } = props;
  const sumOfCalories = todaysItems.reduce((a, c) => a + c.calories * c.qty, 0);

  return (
    <div>
      <h1>Today's Food</h1>
      <div>{todaysItems.length === 0 && <div>No Food Today</div>}</div>
      {todaysItems.map((item) => (
        <ul key={item.name}>
          <li>
            {item.name} {item.qty}x{item.calories * item.qty}
          </li>
          {/*   <button onClick={() => onAdd(item)}></button> */}
        </ul>
      ))}
      <div>Total Calories:{sumOfCalories} cal</div>
    </div>
  );
};

export default TodaysFood;
