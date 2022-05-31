import React from 'react';

const Food = (props) => {
  const { food, onAdd } = props;

  /* const onTrigger = (event) => {
    return props.parentCallback(event.target.adding.value);
  }; */

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        {/*         <form onSubmit={() => onAdd(food)}> */}
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input name="adding" className="input" type="number" />
            </div>
            <div className="control">
              <button
                onClick={() => onAdd(food)}
                type="submit"
                className="button is-info"
              >
                +
              </button>
            </div>
          </div>
        </div>
        {/*         </form> */}
      </article>
    </div>
  );
};

export default Food;
