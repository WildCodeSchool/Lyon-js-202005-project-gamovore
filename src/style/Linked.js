import styled from "styled-components";
import { Link } from "react-router-dom";

const Linked = styled(Link)`
  outline: 0;
  text-decoration: none;
  color: ${(props) => (props.issidebar ? "#000000" : "#fbb700")};
  font-weight: bold;
  transition: all 0.8s ease-out;
  :hover {
    color: ${(props) => (props.issidebar ? "#ffffff" : "#ffffff")};
  }
  :visited {
    color: ${(props) => (props.issidebar ? "#000000" : "#fbb700")};
  }
  :visited:hover {
    color: ${(props) => (props.issidebar ? "#ffffff" : "#ffffff")};
  }
`;

export default Linked;
