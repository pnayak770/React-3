import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase progress by 1% every 1000ms (1 second)
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 1000);

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className="App">
      <div className="progress-container">
        <div className="progress-ring">
          <svg width="200" height="200">
            <circle
              className="progress-ring__circle"
              stroke="#3e3e3e"
              strokeWidth="10"
              fill="transparent"
              r="80"
              cx="100"
              cy="100"
            />
            <circle
              className="progress-ring__circle progress-ring__circle--progress"
              stroke="#DE3163"
              strokeWidth="10"
              fill="transparent"
              r="80"
              cx="100"
              cy="100"
              style={{
                strokeDasharray: 2 * Math.PI * 80,
                strokeDashoffset: `${(100 - progress) * (2 * Math.PI * 80) / 100}px`
              }}
            />
          </svg>
          {progress === 100 && <div className="message">Congratulations! Process Completed.</div>}
          {progress !== 100 && <div className="progress">{progress}%</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
