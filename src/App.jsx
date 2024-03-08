// src/App.jsx
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    if (name.trim() !== '') {
      setMessage(`Hello ${name}! Welcome to the Vite app.`);
    } else {
      setMessage('Please enter your name.');
    }
  };

  return (
    <div>
      <h1>Your Vite App with Netlify Function</h1>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button onClick={handleButtonClick}>Enter</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
