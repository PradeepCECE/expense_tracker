
import React, { useState, useEffect } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/expenses')
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ul>
        {expenses.map(exp => (
          <li key={exp.id}>{exp.title}: ${exp.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
