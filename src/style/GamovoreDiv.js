import styled from "styled-components";

const GamovoreDiv = styled.div`
  display: flex;
  margin-top: 2%;
  margin-bottom: 2%;
  align-items: center;
  padding: 5%;
  background-color: ${(props) => (props.inChat ? "#fbb700" : "#393431")};
  color: black;
  border-radius: 10px;
  cursor: pointer;
  ${(props) => (props.inChat ? "box-shadow: 5px 5px 5px #000000" : "")};
`;

export default GamovoreDiv;
