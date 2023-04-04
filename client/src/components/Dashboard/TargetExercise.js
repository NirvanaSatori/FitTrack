import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function TargetExercise() {
  const [exerciseTarget, setExerciseTarget] = useState(null);

  useEffect(() => {
    // send a GET request to the backend to retrieve the user's exercise target
    fetch('/target_exercises')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // set the exercise target in the state
        setExerciseTarget(data);
      })
      .catch(error => {
        console.error('There was a problem retrieving the exercise target:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Exercise Target</h2>
      {exerciseTarget ? (
        <div className="exercise-target">
          <p><strong>Target Type:</strong> {exerciseTarget.type}</p>
          <p><strong>Duration:</strong> {exerciseTarget.duration} minutes</p>
          <p><strong>Calories Burnt:</strong> {exerciseTarget.calories} calories</p>
        </div>
      ) : (
        <p>No exercise target set yet.</p>
      )}
    </div>
  );
}

export default TargetExercise;
