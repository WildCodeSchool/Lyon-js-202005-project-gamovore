import React from "react";
import styled from "styled-components";
import { BsChevronDoubleUp } from "react-icons/bs";

let intervalId;

const Scroll = styled.button`
  opacity: 0.3;
  background-color: #fbb700;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  border: none;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

const ArrowUp = styled.span`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -5px;
`;

const ScrollButton = (props) => {
  const scrollStep = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    intervalId = setInterval(scrollStep, props.delayInMs);
  };

  return (
    <Scroll title="Back to top" onClick={scrollToTop}>
      <ArrowUp>
        <BsChevronDoubleUp />
      </ArrowUp>
    </Scroll>
  );
};
export default ScrollButton;
// <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
