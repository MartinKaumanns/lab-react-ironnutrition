import React, { useState } from 'react';

const AddFood = (props) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, calories, image };
    console.log('Added: ', newFood);
    props.addFood(newFood);
    setDisplayForm(!displayForm);
  };

  const [displayForm, setDisplayForm] = useState(false);

  // Setting the state of the form from invisible to visible.
  const handleToggleFormClick = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <div className="App">
      <button onClick={handleToggleFormClick}>Add Food</button>
      {displayForm && (
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label>Calories: </label>
              <input
                type="text"
                name="calories"
                value={calories}
                onChange={(event) => setCalories(event.target.value)}
              />
              <label>Image: </label>
              <input
                type="text"
                className="input"
                placeholder="enter image URL"
                value={image}
                alt={name}
                onClick={(event) => setImage(event.target.value)}
              />

              <button>Add food</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFood;
