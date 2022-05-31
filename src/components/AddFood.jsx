import React, { useState } from 'react';

const AddFood = (props) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.src);

  const handleSubmit = (e) => {
    e.preventDefault();
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
                onChange={handleNameInput}
              />
              <label>Calories: </label>
              <input
                type="text"
                name="calories"
                value={calories}
                onChange={handleCaloriesInput}
              />
              <label>Image: </label>
              <input
                type="file"
                alt={name}
                src={image}
                onClick={handleImageInput}
              />

              <button type="submit">Add food</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFood;
