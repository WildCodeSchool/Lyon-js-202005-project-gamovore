import React from 'react';
import HeaderBox from './boxbox/HeaderBox';
import SidebarBox from "./boxbox/SidebarBox"
import FooterBox from "./boxbox/FooterBox"
import MainBox from "./boxbox/MainBox"
import GridLayout from "./components/GridLayout";
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';



function App() {
  return (
    <GridLayout>
      <HeaderBox />
      <SignInForm />
      <SignUpForm />
      <SidebarBox />
      <MainBox />
      <FooterBox />

    </GridLayout>
  )
}

export default App;
