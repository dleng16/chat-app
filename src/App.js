import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashbaord from './Dashboard'
import Store from './Store'


function App() {
  return (
    <div className="App">
      <Store>
        <Dashbaord />
      </Store>
    </div>
  );
}

export default App;
