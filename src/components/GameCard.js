import React from 'react';
import GameCardJacquette from './GameCardJacquette';
import GameCardName from './GameCardName';
import GameCardStyle from './GameCardStyle';
import AddGameButton from './AddGameButton';
import Plus from './Plus';
import PlusImg from '../img/white/plus.png';
import styled from "styled-components";

const fakeGame = {name: "Tetris 3d", img:"https://cdn.steamgriddb.com/grid/1a009b56c1b7d90e5b4216fc0f9fa4e6.png"}

const GameCard = () => {
    return (
        <GameCardStyle>
            <GameCardJacquette src={fakeGame.img}/>
            <GameCardName>{fakeGame.name}</GameCardName>
            <AddGameButton>
                <Plus src={PlusImg} />
            Add to Collection
            </AddGameButton>
        </GameCardStyle>
    )
}

export default GameCard;