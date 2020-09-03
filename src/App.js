import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HeaderBox from "./components/HeaderBox";
import SidebarBox from "./components/SidebarBox";
import FooterBox from "./components/FooterBox";
import Main from "./style/Main";
import GridLayout from "./style/GridLayout";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import GameListBox from "./containers/GameListBox";
import GameItem from "./components/GameItem";
import ProfilPage from "./containers/ProfilPage";
import GamovoreProfil from "./components/GamovoreProfil";
import { GameListProvider } from "./context/GameListContext";
import { UserContext } from "./context/UserContext";
import PageTitle from "./components/PageTitle";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <GridLayout>
        <GameListProvider>
          <HeaderBox />  
    
            <SidebarBox />
    
            <Main>
              <PageTitle />
    
              <Switch>
                <Route path="/sign-in" component={SignInForm} />
                <Route path="/sign-up" component={SignUpForm} />
                <Route path="/game/:gameId" component={GameItem} />
                <Route exact path="/" component={GameListBox} />
                <Route path="/profil">
                  {user === null ? <Redirect to="/sign-in" /> : <ProfilPage />}
                </Route>
                <Route path="/gamovore/:gamovoreId" component={GamovoreProfil} />
              </Switch>
            </Main>
          </GameListProvider>
          <FooterBox />
        </GridLayout>
    </Router>
  );
};

export default App;
