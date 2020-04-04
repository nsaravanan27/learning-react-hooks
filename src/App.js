import React from 'react';
import './App.css';
import ParentComponent from './components/useCallback-hook';
import MainMemoHook from './components/useMemo-hook';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <MainMemoHook />
    </div>
  );
}

export default App;
