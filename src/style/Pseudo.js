import styled from "styled-components";

const StyleForPseudo = styled.p`
  margin: 0 0 0.25rem;
  color: ${(props) => (props.inChat ? "black" : "#eee")};
  font-weight: 500;
  font-size: 1.5vw;
  padding-right: 5%;
  @media screen and (max-width: 600px) {
    font-size: 1.2em;
  }
`;

export default StyleForPseudo;
