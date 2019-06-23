import React from 'react';
import './App.css';
import IntervalActiveAction from './IntervalActiveAction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IntervalActiveAction onTimeout={() => console.log('do polling')}/>
      </header>
    </div>
  );
}

export default App;
