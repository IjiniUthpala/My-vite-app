// src/App.jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [functionData, setFunctionData] = useState(null);
  const [name, setName] = useState('User');

  const fetchData = async () => {
    try {
      const response = await fetch(`/.netlify/functions/customFunction?name=${encodeURIComponent(name)}`);
      const data = await response.json();
      setFunctionData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <div>
      <h1>Your Vite App with Netlify Function</h1>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      {functionData && <p>{functionData.message}</p>}
      {!functionData && <p>Loading data...</p>}
    </div>
  );
}

export default App;
