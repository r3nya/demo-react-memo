import React, { useState, useRef } from 'react';

const Counter = React.memo(
  ({ onOdd, data }) => {
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

        <h1>{data.hello}</h1>
      </div>
    );
  },
  // (prevProps, nextProps) => {
  //   if (prevProps.data.hello !== nextProps.data.hello) {
  //     return false;
  //   }

  //   return true;
  // },
);

export { Counter };
