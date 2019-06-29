import React, { useState, useRef } from 'react';

const Counter = React.memo(({ onOdd }) => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <h1>Renders: {renders.current++}</h1>
      <button
        onClick={() => {
          if (count % 2 === 0) {
            onOdd();
          }
          setCount(c => c + 1);
        }}
      >
        ++ increment ++
      </button>
    </div>
  );
});

export { Counter };
