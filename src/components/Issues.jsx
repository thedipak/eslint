import React from 'react';

export default function Issues(props) {
  //   console.log('This is a lengthy component'); // `console.log` used, should trigger `no-console`

  function veryLargeFunction(a, b, c) {
    // More than 4 params, should trigger `max-params`
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      // Very lengthy function, should trigger `max-statements`
      result += i;
      if (result > 500) {
        result -= a;
        if (result > 1000) {
          // Too much nesting, should trigger `max-depth`
          result += b;
          if (result > 2000) {
            result -= c;
            // if (result > 3000) {
            //   result -= d;
            // }
          }
        }
      }
    }
    return result;
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={() => veryLargeFunction(1, 2, 3, 4, 5)}>
        Calculate
      </button>
    </div>
  );
}
