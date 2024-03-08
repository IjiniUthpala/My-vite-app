// src/App.jsx
import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleButtonClick = () => {
    if (name.trim() !== '') {
      setMessage(`Hello ${name}! Welcome to the Vite app.`);
      setIsSubmitted(true);
    } else {
      setMessage('Please enter your name.');
      setIsSubmitted(false);
    }
  };

  return (
    <div className={`${styles.container} ${isSubmitted ? styles.submitted : ''}`}>
      <h1>Welcome to my Vite App</h1>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleNameChange} className={styles.input} />
      </label>
      <button onClick={handleButtonClick} className={styles.button}>
        Enter
      </button>
      {isSubmitted && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default App;
