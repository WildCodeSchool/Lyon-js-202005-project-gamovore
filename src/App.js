import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
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
import { GameListProvider } from "./context/GameListContext";
import { FilterContext } from "./context/FilterContext";
const App = () => {
  return (
    <Router>
      <UserProvider>
        <GridLayout>
          <HeaderBox />

          <GameListProvider>
            <FilterContext.Provider>
              <SidebarBox />

              <Main>
                <Switch>
                  <Route path="/sign-in" component={SignInForm} />
                  <Route path="/sign-up" component={SignUpForm} />
                  <Route path="/game/:gameId" component={GameItem} />
                  <Route exact path="/" component={GameListBox} />
                  <Route path="/profil" component={ProfilPage} />
                </Switch>
              </Main>
            </FilterContext.Provider>
          </GameListProvider>
          <FooterBox />
        </GridLayout>
      </UserProvider>
    </Router>
  );
};

export default App;
