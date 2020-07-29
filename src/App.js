import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBox from './boxbox/HeaderBox';
import SidebarBox from "./boxbox/SidebarBox"


function App() {
  return (
    <div className="App">
      <HeaderBox />
      <SidebarBox />
    </div>
  );
}

export default App;
