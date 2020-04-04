import React from 'react';

function Counter({onClickHandler, name, value}) {
  console.log(name);
  return (
    <div>
      <button onClick={onClickHandler}> { name } : { value } </button>
    </div>
  );
}

export default React.memo(Counter);