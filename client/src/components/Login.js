import React, { useState } from 'react';
import './Login.css';
import Swal from 'sweetalert2';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'setEmail' && password === 'password') {
      // Show success alert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back, Admin!',
      });
    } else {
      // Show error alert
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Incorrect email or password',
      });
    }
  // };
    console.log(`email: ${email}, Password: ${password}`);

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle successful login, e.g. redirect to dashboard
      })
      .catch((error) => console.error(error));
  
  };

  



  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;