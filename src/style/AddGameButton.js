import styled from "styled-components";

const AddGameButton = styled.button`
  display: flex;
  background-color: #fbb700;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  width: 65%;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  margin-top: 2%;
  color: black;
  font-size: 1em;
  justify-content: space-around;
  align-items: center;
  transition: all 0.4s ease-out;
  :hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

export default AddGameButton;
