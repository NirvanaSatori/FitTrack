import React, { useState } from 'react';
import './Food.css';

function Food() {
  const [foods, setFoods] = useState([]);

  const addFood = () => {
    const newFood = { id: foods.length + 1, name: '', image: '', description: '' };
    setFoods([...foods, newFood]);
  };

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const handleInputChange = (id, field, value) => {
    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return { ...food, [field]: value };
      }
      return food;
    });
    setFoods(updatedFoods);
  };

  return (
    <div className="food-list">
      {foods.map((food) => (
        <div className="food-card" key={food.id}>
          <input
            className="food-name"
            placeholder="Name"
            value={food.name}
            onChange={(event) => handleInputChange(food.id, 'name', event.target.value)}
          />
          {food.image && (
            <img className="food-image-preview" src={food.image} alt="Food" />
          )}
          {!food.image && (
            <div className="food-image-input-container">
              <input
                className="food-image"
                placeholder="Image URL"
                value={food.image}
                onChange={(event) => handleInputChange(food.id, 'image', event.target.value)}
              />
              <button className="upload-button" onClick={() => {}}>
                Upload
              </button>
            </div>
          )}
          <textarea
            className="food-description"
            placeholder="Description"
            value={food.description}
            onChange={(event) => handleInputChange(food.id, 'description', event.target.value)}
          />
          <button className="delete-button" onClick={() => deleteFood(food.id)}>
            Delete
          </button>
        </div>
      ))}
      <button className="add-button" onClick={addFood}>
        Add Food
      </button>
    </div>
  );
}

export default Food;