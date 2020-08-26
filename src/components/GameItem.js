import React from "react";
import gameCoverPlaceholder from "../img/white/gameCoverPlaceholder.png";
import GameInfo from "../style/GameInfo";
import GameCoverBox from "../style/GameCoverBox";
import GameImage from "../style/GameImage";
import GamePage from "../style/GamePage";
import GameResume from "../style/GameResume";
import GameInfoList from "../style/GameInfoList";
import GameInfoListTitle from "../style/GameInfoListTitle";
import GameInfoListList from "../style/GameInfoListList";
import Button from "../style/Button";
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
import PageTitle from "./PageTitle";

const GameItem = (props) => {
	const game = props.location.state.detail;
	console.log(game);
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
							{item.name === "PC (Microsoft Windows)" ? <SiWindows /> : ""}
							{item.name === "Mac" ? <SiApple /> : ""}
							{item.name === "Linux" ? <SiLinux /> : ""}
							{item.name === "PlayStation" ? <SiPlaystation /> : ""}
							{item.name === "PlayStation 2" ? (
								<SiPlaystation2 size={32} />
							) : (
								""
							)}
							{item.name === "PlayStation 3" ? (
								<SiPlaystation3 size={32} />
							) : (
								""
							)}
							{item.name === "PlayStation 4" ? (
								<SiPlaystation4 size={32} />
							) : (
								""
							)}
							{item.name === "PlayStation Network" ? "playStation Netword" : ""}
							{item.name === "Xbox One" ? <SiXbox /> : ""}
							{item.name === "Xbox 360" ? <SiXbox /> : ""}
							{item.name === "Xbox" ? <SiXbox /> : ""}
							{item.name === "Nintendo DS" ? <SiNintendo3Ds /> : ""}
							{item.name === "Nintendo GameCube" ? <SiNintendogamecube /> : ""}
							{item.name === "Nintendo Switch" ? <SiNintendoswitch /> : ""}
							{item.name === "Super Nintendo Entertainment System (SNES)" ? (
								<SiNintendonetwork />
							) : (
								""
							)}
							{item.name === "Game Boy Advance" ? "Game Boy Advance" : ""}
							{item.name === "PlayStation Portable"
								? "Playstation Portable"
								: ""}
							{item.name === "iOS" ? <SiIos size={20} /> : ""}
							{item.name === "Android" ? <MdAndroid /> : ""}
							{item.name === "Sega Saturn" ? <SiSega /> : ""}
						</GameInfoListList>
					))}
				</GameInfoList>
				<Button>Add to My games</Button>
			</GameInfo>
		</GamePage>
	);
};

export default GameItem;
