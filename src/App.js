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
import Main from "./style/Main";
import GridLayout from "./style/GridLayout";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import GameListBox from "./containers/GameListBox";
import GameItem from "./components/GameItem";
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
	const [currentUser, setCurrentUser] = useState({
		id: 1,
		pseudo: "kikidu69",
		email: "ccasella0@sciencedirect.com",
		password: "gamovore",
		department: "69",
		description:
			"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
		avatar: "https://i.ebayimg.com/images/g/MXEAAOSwDYdcQJNx/s-l300.jpg",
		avaibality: ["afternoon"],
		gameMode: ["MMO", "multi"],
		gameGenre: ["Action"],
		favoriteGameId: [2183],
		favoriteGamovoreId: [2],
	});
	return (
		<Router>
			<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
				<GridLayout>
					<HeaderBox />

					<SidebarBox />

					<Main>
						<Switch>
							<Route path="/sign-in" component={SignInForm} />
							<Route path="/sign-up" component={SignUpForm} />
							<Route path="/game/:gameId" component={GameItem} />
							<Route path="/game-list" component={GameListBox} />
							<Route path="/profil" component={ProfilPage} />
						</Switch>
					</Main>
					<FooterBox />
				</GridLayout>
			</AuthContext.Provider>
		</Router>
	);
};

export default App;
