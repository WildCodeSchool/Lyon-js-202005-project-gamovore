import styled from "styled-components";

const ProfilPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default ProfilPageLayout;
