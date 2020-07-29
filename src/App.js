import React from 'react';
import HeaderBox from './boxbox/HeaderBox';
import SidebarBox from "./boxbox/SidebarBox"
import FooterBox from "./boxbox/FooterBox"
import MainBox from "./boxbox/MainBox"
import GridLayout from "./components/GridLayout";



function App() {
  return (
    <GridLayout>
      <HeaderBox />
      <SidebarBox />
      <MainBox />
      <FooterBox />

    </GridLayout>
  )
}

export default App;
