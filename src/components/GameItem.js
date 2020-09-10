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
let intervalId;

const GameItem = (props) => {
  const game = props.location.state.detail;

  const { user, setUser } = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const gameId = game.id;

  const scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  };

  const scrollToTop = () => {
    intervalId = setInterval(scrollStep, 10);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const addGame = (user, gameId) => {
    if (user && firebase) {
      const userId = user.id;
      firebase.userActu(userId).update({
        favoriteGameId: firebase.dataAdd(gameId),
      });

      firebase.userActu(userId).onSnapshot(function (doc) {
        setUser(doc.data());
      });
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
    }
  };

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? console.log("Welcome home") : props.history.push("/sign-in");
    });
    return () => {
      listener();
    };
  }, [user, firebase.auth, props.history]);

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
            <GameInfoListTitle>Game Mode(s) : </GameInfoListTitle>
            {game.game_modes ? (
              game.game_modes.map((item) => (
                <GameInfoListList key={item.id}>
                  {item.name} -{" "}
                </GameInfoListList>
              ))
            ) : (
              <GameInfoListList></GameInfoListList>
            )}
          </GameInfoList>
          <GameInfoList>
            <GameInfoListTitle>Genre(s) : </GameInfoListTitle>
            {game.genres ? (
              game.genres.map((item) => (
                <GameInfoListList key={item.id}>{item.name}</GameInfoListList>
              ))
            ) : (
              <GameInfoListList></GameInfoListList>
            )}
          </GameInfoList>
          <GameInfoList>
            <GameInfoListTitle>Plateform(s) : </GameInfoListTitle>

            {game.platforms
              ? game.platforms.map((item) => (
                  <GameInfoListList key={item.id}>
                    {item.name === "PC (Microsoft Windows)" ? (
                      <>
                        <SiWindows data-tip data-for="windows" />
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
                        <SiApple data-tip data-for="mac" />
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
                        <SiLinux data-tip data-for="linux" />
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
                        <SiPlaystation data-tip data-for="plastation" />
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
                        <SiPlaystation2
                          size={32}
                          data-tip
                          data-for="plastation2"
                        />
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
                        <SiPlaystation3
                          size={32}
                          data-tip
                          data-for="plastation3"
                        />
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
                        <SiPlaystation4
                          size={32}
                          data-tip
                          data-for="plastation4"
                        />
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
                        <SiXbox data-tip data-for="xboxone" />
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
                        <SiXbox data-tip data-for="xbox360" />
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
                        <SiXbox data-tip data-for="xbox" />
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
                        <SiNintendo3Ds data-tip data-for="nintendods" />
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
                        <SiNintendogamecube data-tip data-for="gamecube" />
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
                        <SiNintendoswitch data-tip data-for="switch" />
                        <ReactTooltip
                          id="switch"
                          type="light"
                          place="top"
                          effect="solid"
                        >
                          <span>nintendo switch</span>
                        </ReactTooltip>
                      </>
                    ) : (
                      ""
                    )}
                    {item.name ===
                    "Super Nintendo Entertainment System (SNES)" ? (
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
                        <SiIos size={20} data-tip data-for="ios" />
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
                        <MdAndroid data-tip data-for="android" />
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
                ))
              : ""}
          </GameInfoList>

          {user.favoriteGameId.includes(gameId) ? (
            <AddGameButton onClick={() => deleteGame(user, gameId)}>
              <RiDeleteBin5Fill fontSize="2.5em" />
              Remove from collection
            </AddGameButton>
          ) : (
            <AddGameButton onClick={() => addGame(user, gameId)}>
              <RiAddFill fontSize="3em" />
              Add to collection
            </AddGameButton>
          )}

          <Gamovores gameId={game.id} />
        </GameInfo>
      </GamePage>
    );
  } else {
    return <p>Nobody added this game to their collection yet.</p>;
  }
};

export default GameItem;
