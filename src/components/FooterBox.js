import React from "react";
import Footer from "../style/Footer";
import Linked from "../style/Linked";
import FooterSpan from "../style/FooterSpan";
import ScrollButton from "../components/ScrollButton";

const FooterBox = () => {
  return (
    <Footer>
      Made with{" "}
      <FooterSpan role="img" aria-label="love">
        ❤️
      </FooterSpan>
      by{" "}
      <Linked to="https://www.linkedin.com/in/alexandra-lhermitte-802a54171/">
        Alexandra
      </Linked>
      ,{" "}
      <Linked to="https://www.linkedin.com/in/alyson-bernabeu-08249a172/">
        Alyson
      </Linked>
      ,{" "}
      <Linked to="https://www.linkedin.com/in/guillaume-bento-aires-7623071a3/">
        Guillaume
      </Linked>
      ,{" "}
      <Linked to="https://www.linkedin.com/in/pablo-vilella-0bb66b195/">
        Pablo
      </Linked>{" "}
      et{" "}
      <Linked to="https://www.linkedin.com/in/s%C3%A9bastien-morin-70a0371ab/">
        Sebastien
      </Linked>
      <ScrollButton scrollStepInPx="50" delayInMs="10" />
    </Footer>
  );
};

export default FooterBox;
