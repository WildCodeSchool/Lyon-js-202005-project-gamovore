import styled from "styled-components";

const IsLogged = styled.div`
  width: 90%;
  margin: 1%;
  justify-content: flex-end;
  align-self: flex-end;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default IsLogged;
