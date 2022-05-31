import React, { useState } from 'react';
/* import Foods from './foods.json'; */

const Search = (props) => {
  const { foods, setFoods } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (searchTerm) => {
    const filteredFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFoods(filteredFood);
    setSearch(searchTerm);
  };

  return (
    <div>
      <input
        className="search"
        value={search}
        type="text"
        placeholder="Type here"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
