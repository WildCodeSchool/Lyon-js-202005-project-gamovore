import React from "react";
import { useLocation } from "react-router-dom";
import StyledPageTitle from "../style/StyledPageTitle";
import Title from "../style/Title";

export default function PageTitle() {
	const location = useLocation();
	const url = location.pathname;
	const regexforGame = /\/game/;
	function mySwitch(url) {
		switch (url) {
			case "/sign-in":
				return "Sign In";
			case "/sign-up":
				return "Sign Up";
			case "/game-list":
				return "Games List";
			case "/profil":
				return "Profile";
			case "/game":
				return "Title";
			default:
				return "Game Details";
		}
	}

	return (
		<div>
			<StyledPageTitle>
				<h1>{mySwitch(url)}</h1>
			</StyledPageTitle>
		</div>
	);
}
