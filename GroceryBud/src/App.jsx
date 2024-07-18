import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling


function initializeGroceries() {
  const savedGroceries = JSON.parse(localStorage.getItem('groceries'));
  return savedGroceries ? savedGroceries : [];
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [groceries, setGroceries] = useState(initializeGroceries());

  useEffect(() => {
    localStorage.setItem('groceries', JSON.stringify(groceries));
    console.log('Data saved to local storage:', groceries);
  }, [groceries]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addGrocery = () => {
    if (inputValue.trim() !== '') {
      setGroceries([...groceries, { name: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleCompletion = (index) => {
    const updatedGroceries = [...groceries];
    updatedGroceries[index].completed = !updatedGroceries[index].completed;
    setGroceries(updatedGroceries);
  };

  const deleteGrocery = (index) => {
    const updatedGroceries = [...groceries];
    updatedGroceries.splice(index, 1);
    setGroceries(updatedGroceries);
  };

  const clearCompleted = () => {
    const updatedGroceries = groceries.filter(grocery => !grocery.completed);
    setGroceries(updatedGroceries);
  };

  const hasCompletedTasks = groceries.some(grocery => grocery.completed);

  return (
    <div className="container">
      <h1>Grocery List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter a grocery item" 
          className="input-field"
        />
        <button onClick={addGrocery} className="add-btn">Add</button>
      </div>
      <ul className="grocery-list">
        {groceries.map((grocery, index) => (
          <li key={index} className={grocery.completed ? 'completed' : ''}>
            <input type="checkbox" checked={grocery.completed} onChange={() => toggleCompletion(index)} className="checkbox" />
            <span className="grocery-name">{grocery.name}</span>
            <button onClick={() => deleteGrocery(index)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
      {hasCompletedTasks && (
        <button onClick={clearCompleted} className="clear-btn">Clear Completed</button>
      )}
    </div>
  );
}

export default App;
