import styled from "styled-components";

const GridLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  grid-template-columns: 20% 1fr;
  color: #f3f3f3;

  & h1 {
    color: #fbb700;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 100% 1fr;
    grid-template-areas:
      "header"
      "aside"
      "main"
      "footer";
  }
`;

export default GridLayout;
