import styled from "styled-components";

const GameCardStyle = styled.li`
  display: flex;
  flex-flow: column wrap;
  height: auto;
  width: ${(props) => (props.little ? "40%" : "30%")};
  background-color: #453f3b;
  margin: ${(props) => (props.little ? "2%" : "1%")};
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 5px 5px #000000;
  transition: all 0.2s ease-out;
  :hover {
    cursor: pointer;
    border: solid 3px #fbb700;
    transition: all 0.2s ease-out;
  }
`;

export default GameCardStyle;
