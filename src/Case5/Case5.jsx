import React, { useState } from 'react';
import { Counter } from './Counter';

// d

const Case5 = () => {
  const [text, setText] = useState('');

  const onOdd = React.useCallback(() => setText(''), [setText]);
  const data = { hello: 'jsnn' };

  return (
    <div className="case">
      <input value={text} onChange={e => setText(e.currentTarget.value)} />

      <Counter onOdd={onOdd} data={data} />
    </div>
  );
};

export default Case5;

// const data = React.useMemo(() => ({ hello: 'jsnn' }), []);
