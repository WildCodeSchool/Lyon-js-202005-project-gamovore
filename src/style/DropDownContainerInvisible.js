import styled from "styled-components";

const DropDownContainerInvisible = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 90px;
  width: 20%;
  @media screen and (max-width: 600px) {
    top: 170px;
    width: 30%;
  }
`;

export default DropDownContainerInvisible;
