// src/App.jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [functionData, setFunctionData] = useState(null);

  useEffect(() => {
    // Fetch data from your Netlify Function
    fetch('/.netlify/functions/customFunction')
      .then((response) => response.json())
      .then((data) => setFunctionData(data));
  }, []);

  return (
    <div>
      <h1>Your Vite App with Netlify Function</h1>
      {functionData && <p>{functionData.message}</p>}
      {!functionData && <p>Loading data...</p>}
    </div>
  );
}

export default App;
