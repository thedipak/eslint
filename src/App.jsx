import React from 'react';
import Issues from './components/Issues';
import PerformanceIssues from './components/PerformanceIssues';

function App() {
  // let value = 10;
  // console.log('user', value);
  // console.log('hello');
  return (
    <div className='container'>
      <h1> Gen AI - ESlint </h1>

      <Issues />
      <PerformanceIssues />
    </div>
  );
}

export default App;
