import styled from "styled-components";

const LogoShining = styled.div`
  width: 10.5%;
  clip-path: polygon(
    100% 3%,
    79% 46%,
    82% 54%,
    79% 62%,
    73% 65%,
    67% 71%,
    54% 99%,
    37% 71%,
    32% 68%,
    30% 66%,
    25% 62%,
    24% 57%,
    25% 51%,
    0 10%,
    40% 7%,
    42% 1%,
    52% 0%,
    54% 6%
  );
  overflow: hidden;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -300px;
    width: 75px;
    height: 100%;
    background: rgba(255, 255, 255, 0.43);
    transform: skewX(-30deg);
    transition: 1s;
  }

  &:hover:before {
    left: 250px;
  }
`;

export default LogoShining;
