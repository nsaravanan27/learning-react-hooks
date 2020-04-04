import React from 'react';

function Button({onClickHandler, children}) {
  console.log('button: ', children);
  return (
    <button onClick={ onClickHandler }>
      { children }
    </button>
  );
}

export default React.memo(Button);