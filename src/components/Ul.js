import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none; 
  text-transform:uppercase;
  margin:0;
  padding:0;
 
  

  & li:first-child {
       background-color: #FBB700;
       color: #393431;
       font-weight:bold;
       font-size:1.5em;
       padding-left:5%;
    }

  & ul li:first-child {
      background-color: #2E2A27;
      color:#F3F3F3;

  }

  & ul ul li:first-child {
      background-color: #393431;
      color: #F3F3F3;
      font-weight:normal;
      font-size:1em;
      padding-left: 0;
      padding-left:10%;

  }
`;

export default Ul;

