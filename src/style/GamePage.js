import styled from "styled-components";

const GamePage = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default GamePage;
