import React, { useState } from 'react';
/* import Foods from './foods.json'; */

const Search = (props) => {
  const { foods, setFoods, filteredFoods, setFilteredFoods } = props;

  const [search, setSearch] = useState('');

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    const filteredFood = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filteredFood);
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
