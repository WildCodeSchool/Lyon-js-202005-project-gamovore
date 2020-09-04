import styled from "styled-components";

const Header = styled.header`
  grid-area: header;
  z-index: 2;
  background-color: #2e2a27;
  box-shadow: 0 5px 5px #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;

export default Header;
