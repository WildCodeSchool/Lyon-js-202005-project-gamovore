import styled from "styled-components";

const Textarea = styled.textarea`
  background-color: #4e4643;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.2em;
  cursor: default;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export default Textarea;
