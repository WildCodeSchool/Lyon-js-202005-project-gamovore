import styled from "styled-components";

const StyledSearchBar = styled.form`
  position: relative;
  width: auto;
  background: #57bd84;
  border-radius: 15px;
  & input,
  button {
    height: 40px;
    font-family: "Lato", sans-serif;
    border: 0;
    color: #2f2f2f;
    font-size: 1.8rem;
  }
  &input {
    width: 100%;
    background: #fff;
    padding: 0 1.6rem;
    border-radius: 15px;
    appearance: none;
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }
  &button {
    display: none;
    position: relative;
    top: 0;
    right: 0;
    width: 100px;
    font-weight: bold;
    background: #57bd84;
    border-radius: 0 15px 15px 0;
  }


  &input:not(:placeholder-shown) {
    border-radius: 15px 0 0 15px;
    width: calc(100% - 100px);
    + button {
      display: block;
    }
  }
`;

export default StyledSearchBar;
