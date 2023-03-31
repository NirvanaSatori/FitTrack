import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { username, email, password, gender });

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password, gender })
    })
      .then(response => {
        if (response.ok) {
          console.log('Registration successful!');
        } else {
          console.error('Registration failed.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
