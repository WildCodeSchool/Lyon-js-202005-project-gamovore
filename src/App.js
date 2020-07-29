import React from 'react';
import HeaderBox from './boxbox/HeaderBox';
import SidebarBox from "./boxbox/SidebarBox"
import FooterBox from "./boxbox/FooterBox"
import Main from "./components/Main"



function App() {
  return (
    <div className="App">
      <HeaderBox />
      <SidebarBox />
      <Main />
      <FooterBox />

    </div>
  )
}

export default App;
