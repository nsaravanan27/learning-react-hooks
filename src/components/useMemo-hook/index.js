import React, { useState, useMemo, useCallback } from 'react';
import Counter from './Counter';

function MainMemoHook(props) {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);

  const incrementCounter2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  const isEven = useMemo(() => {
    console.log('isEven');
    let a = 0;
    while(a < 900000000) {
      a++;
    }
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <header>useMemo hook demo</header>
      <Counter name="counter 1 " onClickHandler={incrementCounter1} value={counter1} />
      <span>{isEven ? "Even" : "Odd"}</span>
      <Counter name="counter 2 " onClickHandler={incrementCounter2} value={counter2} />
    </div>
  );
}

export default MainMemoHook;