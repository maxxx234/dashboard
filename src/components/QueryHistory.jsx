import React from 'react';
import { useSelector } from 'react-redux';

function QueryHistory() {
  const history = useSelector((state) => state.query.history);

  return (
    <div>
      <h3>Query History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default QueryHistory;
