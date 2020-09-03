import styled from "styled-components";

const StyledSearchBar = styled.form`
  display: inline;
  position: relative;
  background: #fbb700;
  border-radius: 15px;
  outline: none;

  input,
  button {
    height: 40px;
    border: 0;
    color: #2f2f2f;
    font-size: 1rem;
    outline: none;
  }

  input {
    width: 80%;
    background: #fff;
    padding: 0 1.6rem;
    border-radius: 15px;
    appearance: none;
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }

  button {
    display: none;
    position: relative;
    top: 0;
    right: 0;
    width: 70px;
    font-weight: bold;
    background: #fbb700;
    border-radius: 0 15px 15px 0;
  }

  input:not(:placeholder-shown) {
    border-radius: 15px 0 0 15px;
    width: calc(100% - 80px);
    + button {
      display: inline-block;
    }
  }
`;

export default StyledSearchBar;
