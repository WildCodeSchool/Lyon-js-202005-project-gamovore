import styled from "styled-components";

const StyleForAvatar = styled.img`
  border-radius: 50%;
  margin-right: 1em;
  width: 3vw;
  height: 3vw;
  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

export default StyleForAvatar;
