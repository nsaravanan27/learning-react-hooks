import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button onClickHandler= {() => alert('Hello')}> Click Me </Button>
    </div>
  );
}

export default App;
