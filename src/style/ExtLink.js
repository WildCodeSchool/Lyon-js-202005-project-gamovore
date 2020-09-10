import styled from "styled-components";
// import { render } from '@testing-library/react';

const ExtLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #fbb700;
  transition: all 0.8s ease-out;
  :hover {
    color: #ffffff;
  }
  :visited {
    color: #fbb700;
  }

  :visited:hover {
    color: #ffffff;
  }
`;

export default ExtLink;
