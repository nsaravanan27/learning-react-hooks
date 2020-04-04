import React from 'react';

function Label(props) {
  console.log('Label: ', props.name);
  return (
    <div>
      { props.value }
    </div>
  );
}

export default React.memo(Label);