import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { FaUserCircle } from 'react-icons/fa';
import DisplayTarget from './DisplayTarget';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('There was a problem retrieving the user information:', error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="welcome-message">
        <h1>Welcome to FitTrack, {user && user.username}!</h1>
      </div>
      {user && (
        <div className="user-info-container">
          <div className="user-info">
            <FaUserCircle size={64} />
            <div>
              <h2>{user.name}</h2>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
            </div>
          </div>
        </div>
      )}
      <div className="targets-container">
        <h2>Your Target</h2>
        {user && <DisplayTarget user={user} />}
      </div>
      <div className="target-exercise-container">
        <h2>Target Exercise</h2>
        {/* render TargetExercise component */}
      </div>
      <div className="target-food-container">
        <h2>Target Food</h2>
        {/* render TargetFood component */}
      </div>
    </div>
  );
}

export default Dashboard;
