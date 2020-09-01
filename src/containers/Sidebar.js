import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { GameListContext } from "../context/GameListContext";
import SidebarMenu from "../style/SidebarMenu";
import SidebarSubMenu from "../style/SidebarSubMenu";
import SidebarItemMenu from "../style/SidebarItemMenu";
import Linked from "../style/Linked";
import Searchbar from "../components/SearchBar";

const Sidebar = () => {
  const { data, setData } = useContext(GameListContext);
  const { selectedFilters, setFilters } = useContext(FilterContext);
  const defaultCall =
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 50; where total_rating_count>=80;";
  const filteredSearch = `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 100; where release_dates.platform=(${selectedFilters});`;
  setData(filteredSearch);

  const platforms = [
    { id: 130, name: "Nintendo Switch" },
    { id: 6, name: "PC (Microsoft Windows)" },
    { id: 48, name: "PlayStation 4" },
    { id: 167, name: "PlayStation 5" },
    { id: 169, name: "Xbox Series X" },
    { id: 49, name: "Xbox One" },
  ];

  const handleToggle = (event) => {
    event.persist();
    if (event.target.checked) {
      setFilters((selectedFilters) => [...selectedFilters, event.target.id]);
    } else {
      if (selectedFilters.length === 1) {
        setFilters([]);
        setData(defaultCall);
      } else {
        const removedFilter = selectedFilters.filter(
          (filter) => filter !== event.target.id
        );
        setFilters(removedFilter);
      }
    }
  };

  return (
    <>
      <SidebarMenu>
        <SidebarItemMenu>
          <Linked to="/" issidebar="true">
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
            {platforms.map((item) => (
              <SidebarItemMenu key={item.id}>
                <input
                  type="checkbox"
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  onChange={handleToggle}
                />{" "}
                {item.name.toUpperCase()}
              </SidebarItemMenu>
            ))}
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
