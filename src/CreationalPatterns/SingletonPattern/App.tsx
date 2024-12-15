import { useState } from 'react';
import type { FC } from 'react';

import Counter from './Counter';

const App: FC = () => {
  const counter = Counter.getInstance();
  const [count, setCount] = useState(counter.getCount());

  const handleIncrement = () => {
    counter.increment();
    setCount(counter.getCount());
  };

  const handleDecrement = () => {
    counter.decrement();
    setCount(counter.getCount());
  };

  return (
    <div>
      <h1>Singleton Pattern Example: Counter</h1>
      <p>Current Count: {count}</p>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
