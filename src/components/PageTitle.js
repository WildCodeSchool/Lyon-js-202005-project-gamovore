import React from "react";
import { useLocation } from "react-router-dom";
import StyledPageTitle from "../style/StyledPageTitle";

export default function PageTitle() {
	const location = useLocation();
	const url = location.pathname;
	function mySwitch(url) {
		if (url.includes("/sign-in")) {
			return "Sign In";
		} else if (url.includes("/sign-up")) {
			return "Sign Up";
		} else if (url.includes("/list")) {
			return "Games List";
		} else if (url.includes("/profil")) {
			return "Profile";
		} else if (url.includes("/game")) {
			return "Game Details";
		} else {
			return "Title";
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
