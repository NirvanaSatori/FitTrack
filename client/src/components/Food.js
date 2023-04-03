import React, { useState, useEffect } from "react";
import "./Food.css";

const Food = ({ food, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFood, setEditedFood] = useState(food);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`/foods/${editedFood.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedFood),
      });
      const data = await response.json();
      onUpdate(data);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedFood(food);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedFood({ ...editedFood, [name]: value });
  };

  return (
    <div className="food-container">
      <h4>{editedFood.name}</h4>
      <img src={editedFood.image_url} alt={editedFood.name} />
      {isEditing ? (
        <form>
          <label>
            Calories:
            <input
              type="number"
              name="calories"
              value={editedFood.calories}
              onChange={handleInputChange}
            />
          </label>
          <div className="buttons-container">
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </form>
      ) : (
        <div>
          <p>Calories: {editedFood.calories}</p>
          <p>Protein: {editedFood.protein}</p>
          <p>Carbs: {editedFood.carbs}</p>
          <p>Fat: {editedFood.fat}</p>
          <div className="buttons-container">
            <button onClick={handleEditClick}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("/foods");
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoods();
  }, []);

  const handleFoodUpdate = (updatedFood) => {
    const updatedFoods = foods.map((food) =>
      food.id === updatedFood.id ? updatedFood : food
    );
    setFoods(updatedFoods);
  };

  return (
    <div className="foods-container">
      <h2>Foods</h2>
      {foods.map((food) => (
        <Food key={food.id} food={food} onUpdate={handleFoodUpdate} />
      ))}
    </div>
  );
};

export default Foods;
