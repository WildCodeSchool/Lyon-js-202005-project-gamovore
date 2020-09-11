import styled from "styled-components";

const ProfilAsideLayout = styled.div`
  min-height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default ProfilAsideLayout;
