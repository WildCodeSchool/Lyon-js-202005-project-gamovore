import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HeaderBox from "./components/HeaderBox";
import SidebarBox from "./components/SidebarBox";
import FooterBox from "./components/FooterBox";
import Main from "./components/Main";
import GridLayout from "./components/GridLayout";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <Router>

    
    <GridLayout>
      <HeaderBox />
      <SidebarBox />
      <Main>

      <Switch>
      <Route exact path="/sign-in">
            <SignInForm />
      </Route>
      <Route exact path="/sign-up">
            <SignUpForm />
      </Route>

      </Switch>
      
      </Main>
      <FooterBox />
    </GridLayout>
    </Router>
  );
}

export default App;
