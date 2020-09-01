import React, {useContext} from "react";
import SidebarMenu from "../style/SidebarMenu";
import SidebarSubMenu from "../style/SidebarSubMenu";
import SidebarItemMenu from "../style/SidebarItemMenu";
import Linked from "../style/Linked";
import Searchbar from "../components/SearchBar";
import { GameListContext } from "../context/GameListContext";

const Sidebar = () => {
  //   let games = {
  //     PLATEFORMS: ["PC", "PS4", "XBOX360"],
  //     MODES: ["MMO", "CO-OPERATIVE", "MULTIPLAYERS"],
  //     GENRES: ["ACTION", "ADVENTURE", "COURSE"],
  //   };

  //   let gamovores = {
  //     MODES: ["MMO", "CO-OPERATIVE", "MULTIPLAYERS"],
  //     AVAILABILITIES: ["MORNING", "DAY", "EVENING", "NIGHT"],
  //     GENRES: ["ACTION", "ADVENTURE", "COURSE"],
  //   };
  const { setData } = useContext(GameListContext);
  const onClick = () => {
    setData(null);
  };

  return (
    <>
      <SidebarMenu>
        <SidebarItemMenu>
          <Linked to="/" issidebar="true" onClick={onClick}>
            HOME
          </Linked>
        </SidebarItemMenu>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarItemMenu>GAMES</SidebarItemMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>Search</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <Searchbar />
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>PLATEFORMS</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> PC{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> PS4{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> XBOX360{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>MODES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MMO{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> CO-OPERATIVE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MULTIPLAYERS{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>GENRES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> ACTION{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> AVENTURE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> COURSE{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>
      </SidebarMenu>

      <SidebarMenu>
        <SidebarItemMenu>GAMOVORES</SidebarItemMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>GAMING MODE</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MMO{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> CO-OPERATIVE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MULTIPLAYERS{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>DISPONIBILITIES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MORNING{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> DAY{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> SOIREE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> NIGHT{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>GENRES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> ACTION{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> AVENTURE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> COURSE{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
