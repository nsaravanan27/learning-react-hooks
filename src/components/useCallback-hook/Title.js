import React from 'react';

function Title(props) {
  console.log('tilte component')
  return (
    <header>
      useCallback hook
    </header>
  );
}

export default React.memo(Title);