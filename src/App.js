import React, { createContext, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import HeaderBox from "./components/HeaderBox";
import SidebarBox from "./components/SidebarBox";
import FooterBox from "./components/FooterBox";
import Main from "./components/Main";
import GridLayout from "./components/GridLayout";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import GameListBox from "./components/GameListBox";
import ProfilPage from "./containers/ProfilPage";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={() =>
        currentUser != null ? <Component /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export const AuthContext = createContext(null);

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}> 
    <Router>
    
    <GridLayout>
    
      <HeaderBox />

      <SidebarBox/> 

      <Main>
        <Switch>
        <Route exact path="/sign-in">
            <SignInForm />
        </Route>
        <Route exact path="/sign-up">
            <SignUpForm />
        </Route>
        <PrivateRoute exact path="/game-list" component={GameListBox} />
        <PrivateRoute exact path="/profil" component={ProfilPage} />
         
      </Switch>
       
      </Main>
      <FooterBox />
      </GridLayout>
    </Router>
    </AuthContext.Provider>
  );
};

export default App;
