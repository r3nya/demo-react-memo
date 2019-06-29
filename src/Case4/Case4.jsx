import React, { useState } from 'react';
import { Counter } from './Counter';

const Case4 = () => {
  const [text, setText] = useState('');

  const onOdd = React.useCallback(() => setText(''), [setText]);

  return (
    <div className="case">
      <input value={text} onChange={e => setText(e.currentTarget.value)} />

      <Counter onOdd={onOdd} />
    </div>
  );
};

export default Case4;
