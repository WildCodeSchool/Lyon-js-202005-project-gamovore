import styled from "styled-components";

const GameCardStyle = styled.div`
display:flex;
flex-flow: column wrap;
height: auto;
width: 35vh;
background-color: #453F3B;
margin: 0 0 0.25rem;
border: none;
border-radius: 10%;
justify-content: center;
border:solid 3px #453F3B;
transition: all .8s ease-out;
:hover{
    cursor: pointer;
    border: solid 3px #fbb700;
}

`;

export default GameCardStyle;