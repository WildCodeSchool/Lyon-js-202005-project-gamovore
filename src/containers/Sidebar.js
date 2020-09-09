import React, { useState, useContext, useEffect } from "react";
import { GameListContext } from "../context/GameListContext";
import SidebarMenu from "../style/SidebarMenu";
import SidebarSubMenu from "../style/SidebarSubMenu";
import SidebarSubMenu2 from "../style/SidebarSubMenu2";
import SidebarItemMenu from "../style/SidebarItemMenu";
import SidebarItemMenu2 from "../style/SidebarItemMenu2";
import CollapseCursor from "../style/CollapseCursor";

import Button from "../style/Button";
import Searchbar from "../components/SearchBar";
import Linked from "../style/Linked";

const Sidebar = () => {
  const { setData } = useContext(GameListContext);
  const [platformFilters, setPlatformFilters] = useState([]);
  const [genresFilters, setGenresFilters] = useState([]);
  const [modesFilters, setModesFilters] = useState([]);
  const [where, setWhere] = useState("; where");
  const [filtered, setFiltered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [platformCollapse, setPlatformCollapse] = useState(false);
  const [genreCollapse, setGenreCollapse] = useState(false);
  const [modeCollapse, setModeCollapse] = useState(false);

  const collapsePlatform = () => setPlatformCollapse(!platformCollapse);
  const collapseGenre = () => setGenreCollapse(!genreCollapse);
  const collapseMode = () => setModeCollapse(!modeCollapse);

  const onClick = () => {
    setData(
      "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 20; where total_rating_count>=80;"
    );
  };

  const defaultCall =
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 50; where total_rating_count>=80;";
  const filteredSearch = `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 100${where};`;

  const platforms = [
    { id: 130, name: "Nintendo Switch" },
    { id: 6, name: "PC (Microsoft Windows)" },
    { id: 48, name: "PlayStation 4" },
    { id: 167, name: "PlayStation 5" },
    { id: 169, name: "Xbox Series X" },
    { id: 49, name: "Xbox One" },
  ];

  const genres = [
    { id: 31, name: "Adventure" },
    { id: 33, name: "Arcade" },
    { id: 35, name: "Card & Board Game" },
    { id: 4, name: "Fighting" },
    { id: 25, name: "Hack and slash/Beat 'em up" },
    { id: 36, name: "MOBA" },
    { id: 10, name: "Racing" },
    { id: 11, name: "Real Time Strategy (RTS)" },
    { id: 12, name: "Role-playing (RPG)" },
    { id: 5, name: "Shooter" },
    { id: 14, name: "Sport" },
    { id: 15, name: "Strategy" },
  ];

  const modes = [
    { id: 6, name: "Battle Royale" },
    { id: 3, name: "Co-operative" },
    { id: 5, name: "Massively Multiplayer Online (MMO)" },
    { id: 2, name: "Multiplayer" },
    { id: 1, name: "Single player" },
    { id: 4, name: "Split screen" },
  ];

  const handleFilters = () => {
    setFiltered(true);
    if (
      platformFilters.length > 0 ||
      genresFilters.length > 0 ||
      modesFilters.length > 0
    ) {
      if (
        platformFilters.length > 0 &&
        genresFilters.length === 0 &&
        modesFilters.length === 0
      ) {
        setWhere(
          (where) => `${where} release_dates.platform=(${platformFilters})`
        );
      } else if (
        (platformFilters.length > 0 &&
          genresFilters.length > 0 &&
          modesFilters.length === 0) ||
        (platformFilters.length > 0 &&
          genresFilters.length === 0 &&
          modesFilters.length > 0)
      ) {
        setWhere(
          (where) => `${where} release_dates.platform=(${platformFilters}) &`
        );
      }
      if (genresFilters.length > 0 && modesFilters.length === 0) {
        setWhere((where) => `${where} genres=(${genresFilters})`);
      } else if (genresFilters.length > 0 && modesFilters.length > 0) {
        setWhere((where) => `${where} genres=(${genresFilters}) &`);
      }
      if (modesFilters.length > 0) {
        setWhere((where) => `${where} game_modes=(${modesFilters})`);
      }
    }
  };

  useEffect(() => {
    setData(filteredSearch);
  }, [handleFilters]);

  const handleReset = () => {
    setIsChecked(false);
    setFiltered(false);
    setData(defaultCall);
    setWhere(";where");
    setPlatformFilters([]);
    setGenresFilters([]);
    setModesFilters([]);
  };

  const handlePlatforms = (event) => {
    setIsChecked(true);
    event.persist();
    if (event.target.checked) {
      setPlatformFilters((platformFilters) => [
        ...platformFilters,
        event.target.id,
      ]);
    } else {
      const removedPlatform = platformFilters.filter(
        (filter) => filter !== event.target.id
      );
      setPlatformFilters(removedPlatform);
    }
  };

  const handleGenres = (event) => {
    setIsChecked(true);
    event.persist();
    if (event.target.checked) {
      setGenresFilters((genresFilters) => [...genresFilters, event.target.id]);
    } else {
      const removedGenre = genresFilters.filter(
        (filter) => filter !== event.target.id
      );
      setGenresFilters(removedGenre);
    }
  };

  const handleModes = (event) => {
    setIsChecked(true);
    event.persist();
    if (event.target.checked) {
      setModesFilters((modesFilters) => [...modesFilters, event.target.id]);
    } else {
      const removedGenre = modesFilters.filter(
        (filter) => filter !== event.target.id
      );
      setModesFilters(removedGenre);
    }
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
        <SidebarItemMenu>SEARCH</SidebarItemMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>
            <Searchbar />
          </SidebarItemMenu>
        </SidebarSubMenu>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarItemMenu>FILTERS</SidebarItemMenu>
        <form id="checkboxes">
          <SidebarSubMenu>
            <SidebarItemMenu2 onClick={collapsePlatform}>
              Platforms
              {platformCollapse ? (
                <CollapseCursor>^ &ensp;</CollapseCursor>
              ) : (
                <CollapseCursor>v &ensp;</CollapseCursor>
              )}
            </SidebarItemMenu2>
            <SidebarSubMenu2 collapse={platformCollapse}>
              {platforms.map((item) => (
                <SidebarItemMenu key={item.id}>
                  {isChecked ? (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handlePlatforms}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handlePlatforms}
                      checked={false}
                    />
                  )}{" "}
                  {item.name}
                </SidebarItemMenu>
              ))}
            </SidebarSubMenu2>
          </SidebarSubMenu>

          <SidebarSubMenu>
            <SidebarItemMenu2 onClick={collapseGenre}>
              Genres
              {genreCollapse ? (
                <CollapseCursor>^ &ensp;</CollapseCursor>
              ) : (
                <CollapseCursor>v &ensp;</CollapseCursor>
              )}
            </SidebarItemMenu2>
            <SidebarSubMenu2 collapse={genreCollapse}>
              {genres.map((item) => (
                <SidebarItemMenu key={item.id}>
                  {isChecked ? (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handleGenres}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handleGenres}
                      checked={false}
                    />
                  )}{" "}
                  {item.name}
                </SidebarItemMenu>
              ))}
            </SidebarSubMenu2>
          </SidebarSubMenu>

          <SidebarSubMenu>
            <SidebarItemMenu2 onClick={collapseMode}>
              Modes{" "}
              {modeCollapse ? (
                <CollapseCursor>^ &ensp;</CollapseCursor>
              ) : (
                <CollapseCursor>v &ensp;</CollapseCursor>
              )}
            </SidebarItemMenu2>
            <SidebarSubMenu2 collapse={modeCollapse}>
              {modes.map((item) => (
                <SidebarItemMenu key={item.id}>
                  {isChecked ? (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handleModes}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handleModes}
                      checked={false}
                    />
                  )}{" "}
                  {item.name}
                </SidebarItemMenu>
              ))}
            </SidebarSubMenu2>
          </SidebarSubMenu>
        </form>
        <SidebarSubMenu>
          {filtered ? (
            <Button onClick={handleReset}>Reset Filters</Button>
          ) : (
            <Button onClick={handleFilters}>Filter</Button>
          )}
        </SidebarSubMenu>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
