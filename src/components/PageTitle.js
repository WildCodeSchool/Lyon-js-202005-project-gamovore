import React from "react";
import { useLocation } from "react-router-dom";
import StyledPageTitle from "../style/StyledPageTitle";

export default function PageTitle() {
  const location = useLocation();
  const url = location.pathname;
  function mySwitch(url) {
    if (url.includes("sign-in")) {
      return "";
    } else if (url.includes("sign-up")) {
      return "";
    } else if (url.includes("profil")) {
      return "Profile";
    } else if (url.includes("game")) {
      return "Game Details";
    } else if (url.includes("gamovore")) {
      return "Gamovores";
    } else if (url.includes("chat")) {
      return "Chat";
    } else {
      return "Game List";
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
