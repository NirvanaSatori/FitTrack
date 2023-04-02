import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './Target.css';

function Target() {
  const [name, setName] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // send a GET request to the backend to retrieve the current user's information
    fetch('/users/me')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // set the user id in the state
        setUserId(data.id);
      })
      .catch(error => {
        console.error('There was a problem retrieving the user information:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // send a POST request to the backend to create the target with the entered data and user id
    fetch('/targets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, current_weight: currentWeight, target_weight: targetWeight, user_id: userId })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // show a success message using sweetalert2
        Swal.fire({
          title: 'Success!',
          text: 'Target created successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // redirect to the dashboard
          window.location.href = '/';
        });
      })
      .catch(error => {
        console.error('There was a problem creating the target:', error);
        // show an error message using sweetalert2
        Swal.fire({
          title: 'Error!',
          text: 'There was a problem creating the target',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Set a Target</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="current-weight">Current weight:</label>
          <input id="current-weight" type="text" className="form-control" value={currentWeight} onChange={(event) => setCurrentWeight(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="target-weight">Target weight:</label>
          <input id="target-weight" type="text" className="form-control" value={targetWeight} onChange={(event) => setTargetWeight(event.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Set Target</button>
      </form>
    </div>
  );
}

export default Target;
