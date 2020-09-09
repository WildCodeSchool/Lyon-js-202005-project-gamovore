import React, { useState, useContext, useEffect, useCallback } from "react";
import { GameListContext } from "../context/GameListContext";
import SidebarMenu from "../style/SidebarMenu";
import SidebarSubMenu from "../style/SidebarSubMenu";
import SidebarItemMenu from "../style/SidebarItemMenu";
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

  const onClick = () => {
    setData(
      "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 20; where total_rating_count>=80;"
    );
  };

  const defaultCall =
    "fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 50; where total_rating_count>=80;";
  const filteredSearch = `fields name, summary, cover.url, genres.name, platforms.platform_logo.url ,platforms.name, themes.name, game_modes.name  ; limit 100${where};`;

  const [platforms, setPlatforms] = useState([
    { id: "130", name: "Nintendo Switch", check: false },
    { id: "6", name: "PC (Microsoft Windows)", check: false },
    { id: "48", name: "PlayStation 4", check: false },
    { id: "167", name: "PlayStation 5", check: false },
    { id: "169", name: "Xbox Series X", check: false },
    { id: "49", name: "Xbox One", check: false },
  ]);

  const [genres, setGenres] = useState([
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
  ]);

  const [modes, setModes] = useState([
    { id: 6, name: "Battle Royale" },
    { id: 3, name: "Co-operative" },
    { id: 5, name: "Massively Multiplayer Online (MMO)" },
    { id: 2, name: "Multiplayer" },
    { id: 1, name: "Single player" },
    { id: 4, name: "Split screen" },
  ]);

  const handleFilters = useCallback(() => {
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
  }, [genresFilters, modesFilters, platformFilters]);

  useEffect(() => {
    setData(filteredSearch);
  }, [handleFilters, filteredSearch, setData]);

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
    setPlatforms((prevState) =>
      prevState.map((item) => {
        if (item.id === event.target.id) {
          item.check = !item.check;
          return item;
        } else {
          return item;
        }
      })
    );

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
    setGenres((prevState) =>
      prevState.map((item) => {
        if (item.id == event.target.id) {
          item.check = true;
          return item;
        } else {
          return item;
        }
      })
    );
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
    setModes((prevState) =>
      prevState.map((item) => {
        if (item.id == event.target.id) {
          item.check = true;
          return item;
        } else {
          return item;
        }
      })
    );
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
        <SidebarSubMenu>
          <SidebarItemMenu>
            FILTERS
            <SidebarSubMenu>
              {filtered ? (
                <Button onClick={handleReset}>Reset Filters</Button>
              ) : (
                <Button onClick={handleFilters}>Filter</Button>
              )}
            </SidebarSubMenu>
          </SidebarItemMenu>
        </SidebarSubMenu>
        <form id="checkboxes">
          <SidebarSubMenu>
            <SidebarItemMenu>Platforms</SidebarItemMenu>
            <SidebarSubMenu>
              {platforms.map((item) => (
                <SidebarItemMenu key={item.id}>
                  {isChecked ? (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handlePlatforms}
                      checked={item.check}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handlePlatforms}
                      checked={item.check}
                    />
                  )}{" "}
                  {item.name}
                </SidebarItemMenu>
              ))}
            </SidebarSubMenu>
          </SidebarSubMenu>

          <SidebarSubMenu>
            <SidebarItemMenu>Genres</SidebarItemMenu>
            <SidebarSubMenu>
              {genres.map((item) => (
                <SidebarItemMenu key={item.id}>
                  {isChecked ? (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handleGenres}
                      checked={item.check}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handleGenres}
                      checked={item.check}
                    />
                  )}{" "}
                  {item.name}
                </SidebarItemMenu>
              ))}
            </SidebarSubMenu>
          </SidebarSubMenu>

          <SidebarSubMenu>
            <SidebarItemMenu>Modes</SidebarItemMenu>
            <SidebarSubMenu>
              {modes.map((item) => (
                <SidebarItemMenu key={item.id}>
                  {isChecked ? (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handleModes}
                      checked={item.check}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      key={item.id}
                      name={item.name}
                      id={item.id}
                      onChange={handleModes}
                      checked={item.check}
                    />
                  )}{" "}
                  {item.name}
                </SidebarItemMenu>
              ))}
            </SidebarSubMenu>
          </SidebarSubMenu>
        </form>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
