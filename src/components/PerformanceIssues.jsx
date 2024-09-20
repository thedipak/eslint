import React, { useState, useContext } from 'react';
import { MyContext } from './MyContext';

function PerformanceIssues() {
  const [count, setCount] = useState(0);
  const contextValue = useContext(MyContext);

  // Creating context value inside render, which can cause re-renders
  // const contextData = { value: count }; // Should trigger react/jsx-no-constructed-context-values

  // Using inline arrow functions in JSX, which can cause re-renders
  return (
    <>
      <h1>{contextValue.title}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>{' '}
      {/* Inline function should trigger react/jsx-no-bind */}
    </>
  );
}

export default PerformanceIssues;
