import React, { useState } from 'react';
import { Counter } from './Counter';

const Case2 = () => {
  const [text, setText] = useState('');

  return (
    <div className="case">
      <input value={text} onChange={e => setText(e.currentTarget.value)} />

      <Counter />
    </div>
  );
};

export default Case2;
