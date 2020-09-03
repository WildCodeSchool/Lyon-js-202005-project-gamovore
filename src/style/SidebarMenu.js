import styled from "styled-components";

const SidebarMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & li:first-child {
    background-color: #fbb700;
    color: #393431;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 5%;
  }

  & ul li:first-child {
    background-color: #2e2a27;
    color: #f3f3f3;
  }

  & ul ul li:first-child {
    background-color: #393431;
    color: #f3f3f3;
    font-weight: normal;
    font-size: 1em;
    padding-left: 0;
    padding-left: 10%;
  }
`;

export default SidebarMenu;
