import styled from "styled-components";

const GameListLayout = styled.ul`
  display: flex;
  min-width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-left: -8%;
  }
`;

export default GameListLayout;
