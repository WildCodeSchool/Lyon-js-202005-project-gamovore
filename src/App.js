import React from "react";
import HeaderBox from "./components/HeaderBox";
import SidebarBox from "./components/SidebarBox";
import FooterBox from "./components/FooterBox";
import MainBox from "./components/MainBox";
import GridLayout from "./components/GridLayout";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

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
  );
}

export default App;
