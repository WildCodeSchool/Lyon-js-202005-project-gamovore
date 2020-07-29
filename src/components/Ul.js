import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none; 
  text-transform:uppercase;
  margin:0;
  padding:0;

  & li:first-child {
       background-color: #FBB700;
       padding:1%
    }

  & ul li:first-child {
      background-color: #2E2A27;
      color:#F3F3F3;
  }

  & ul ul li:first-child {
      background-color: #393431;
      color:#F3F3F3;
  }
`;

export default Ul;

