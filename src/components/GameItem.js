import React, { useEffect, useContext } from "react";
import FirebaseContext from "../firebase-config/FirebaseContext";
import { UserContext } from "../context/UserContext";
import ReactTooltip from "react-tooltip";

import gameCoverPlaceholder from "../img/white/gameCoverPlaceholder.png";
import GameInfo from "../style/GameInfo";
import GameCoverBox from "../style/GameCoverBox";
import GameImage from "../style/GameImage";
import GamePage from "../style/GamePage";
import GameResume from "../style/GameResume";
import GameInfoList from "../style/GameInfoList";
import GameInfoListTitle from "../style/GameInfoListTitle";
import GameInfoListList from "../style/GameInfoListList";
import Gamovores from "./Gamovores";
import AddGameButton from "../style/AddGameButton";

import { RiDeleteBin5Fill, RiAddFill } from "react-icons/ri";
import {
  SiPlaystation3,
  SiPlaystation4,
  SiXbox,
  SiWindows,
  SiPlaystation2,
  SiNintendogamecube,
  SiNintendo3Ds,
  SiNintendoswitch,
  SiPlaystation,
  SiApple,
  SiSega,
  SiLinux,
  SiIos,
  SiNintendonetwork,
} from "react-icons/si";

import { MdAndroid } from "react-icons/md";

const GameItem = (props) => {
  const game = props.location.state.detail;

  const { user, setUser } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const gameId = game.id;

  const addGame = (user, gameId) => {
    if (user && firebase) {
      const userId = user.id;
      firebase.userActu(userId).update({
        favoriteGameId: firebase.dataAdd(gameId),
      });

      firebase.userActu(userId).onSnapshot(function (doc) {
        setUser(doc.data());
      });
    } else {
      console.log("non chargé");
    }
  };

  const deleteGame = (user, gameId) => {
    if (user && firebase) {
      const userId = user.id;

      firebase.userActu(userId).update({
        favoriteGameId: firebase.dataRemove(gameId),
      });

      firebase.userActu(userId).onSnapshot(function (doc) {
        setUser(doc.data());
      });
    } else {
      console.log("non chargé");
    }
  };

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? console.log("fuck!!!!") : props.history.push("/sign-in");
    });
    return () => {
      listener();
    };
  }, [user]);

  if (user) {
    return (
      <GamePage>
        <GameCoverBox>
          <GameImage
            src={
              game.cover
                ? "https:" + game.cover.url.replace("thumb", "cover_big_2x")
                : gameCoverPlaceholder
            }
            alt={game.title}
          />
        </GameCoverBox>
        <GameInfo>
          <h1>{game.name}</h1>
          <GameResume>{game.summary}</GameResume>
          <GameInfoList>
            <GameInfoListTitle>Catégorie(s) : </GameInfoListTitle>
            {game.game_modes.map((item) => (
              <GameInfoListList key={item.id}>{item.name} - </GameInfoListList>
            ))}
          </GameInfoList>
          <GameInfoList>
            <GameInfoListTitle>Genre(s) : </GameInfoListTitle>
            {game.genres.map((item) => (
              <GameInfoListList key={item.id}>{item.name}</GameInfoListList>
            ))}
          </GameInfoList>
          <GameInfoList>
            <GameInfoListTitle>Plateforme(s) : </GameInfoListTitle>

            {game.platforms.map((item) => (
              <GameInfoListList key={item.id}>
                {item.name === "PC (Microsoft Windows)" ? (
                  <>
                    <a data-tip data-for="windows">
                      <SiWindows />
                    </a>
                    <ReactTooltip
                      id="windows"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>windows</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Mac" ? (
                  <>
                    <a data-tip data-for="mac">
                      <SiApple />
                    </a>
                    <ReactTooltip
                      id="mac"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>mac</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Linux" ? (
                  <>
                    <a data-tip data-for="linux">
                      <SiLinux />
                    </a>
                    <ReactTooltip
                      id="linux"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>linux</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "PlayStation" ? (
                  <>
                    <a data-tip data-for="plastation">
                      <SiPlaystation />
                    </a>
                    <ReactTooltip
                      id="plastation"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>playstation</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "PlayStation 2" ? (
                  <>
                    <a data-tip data-for="plastation2">
                      <SiPlaystation2 size={32} />
                    </a>
                    <ReactTooltip
                      id="plastation2"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>playstation 2</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "PlayStation 3" ? (
                  <>
                    <a data-tip data-for="plastation3">
                      <SiPlaystation3 size={32} />
                    </a>
                    <ReactTooltip
                      id="plastation3"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>playstation 3</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "PlayStation 4" ? (
                  <>
                    <a data-tip data-for="plastation4">
                      <SiPlaystation4 size={32} />
                    </a>
                    <ReactTooltip
                      id="plastation4"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>playstation 4</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "PlayStation Network"
                  ? "playStation Netword"
                  : ""}
                {item.name === "Xbox One" ? (
                  <>
                    <a data-tip data-for="xboxone">
                      <SiXbox />
                    </a>
                    <ReactTooltip
                      id="xboxone"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>xbox one</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Xbox 360" ? (
                  <>
                    <a data-tip data-for="xbox360">
                      <SiXbox />
                    </a>
                    <ReactTooltip
                      id="xbox360"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>xbox 360</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Xbox" ? (
                  <>
                    <a data-tip data-for="xbox">
                      <SiXbox />
                    </a>
                    <ReactTooltip
                      id="xbox"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>xbox</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Nintendo DS" ? (
                  <>
                    <a data-tip data-for="nintendods">
                      <SiNintendo3Ds />
                    </a>
                    <ReactTooltip
                      id="nintendods"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>nintendo DS</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Nintendo GameCube" ? (
                  <>
                    <a data-tip data-for="gamecube">
                      <SiNintendogamecube />
                    </a>
                    <ReactTooltip
                      id="gamecube"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>GameCube</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Nintendo Switch" ? (
                  <>
                    <a data-tip data-for="switch">
                      <SiNintendoswitch />
                    </a>
                    <ReactTooltip
                      id="switch"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>switch</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Super Nintendo Entertainment System (SNES)" ? (
                  <SiNintendonetwork />
                ) : (
                  ""
                )}
                {item.name === "Game Boy Advance" ? "Game Boy Advance" : ""}
                {item.name === "PlayStation Portable"
                  ? "Playstation Portable"
                  : ""}
                {item.name === "iOS" ? (
                  <>
                    <a data-tip data-for="ios">
                      <SiIos size={20} />
                    </a>
                    <ReactTooltip
                      id="ios"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>iOS</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Android" ? (
                  <>
                    <a data-tip data-for="android">
                      <MdAndroid />
                    </a>
                    <ReactTooltip
                      id="android"
                      type="light"
                      place="top"
                      effect="solid"
                    >
                      <span>android</span>
                    </ReactTooltip>
                  </>
                ) : (
                  ""
                )}
                {item.name === "Sega Saturn" ? <SiSega /> : ""}
              </GameInfoListList>
            ))}
          </GameInfoList>

          {user.favoriteGameId.includes(gameId) ? (
            <AddGameButton onClick={() => deleteGame(user, gameId)}>
              <RiDeleteBin5Fill fontSize="2.5em" />
              Delete to Collection
            </AddGameButton>
          ) : (
            <AddGameButton onClick={() => addGame(user, gameId)}>
              <RiAddFill fontSize="3em" />
              Add to Collection
            </AddGameButton>
          )}

          <Gamovores gameId={game.id} />
        </GameInfo>
      </GamePage>
    );
  } else {
    return <p>No user</p>;
  }
};

export default GameItem;
