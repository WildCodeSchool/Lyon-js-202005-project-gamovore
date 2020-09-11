import styled from "styled-components";

const MyGameDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default MyGameDiv;
