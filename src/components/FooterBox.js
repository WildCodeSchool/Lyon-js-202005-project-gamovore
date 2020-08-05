import React from "react";
import Footer from "./Footer";
import Linked from "./Linked";
import FooterSpan from "./FooterSpan";

const FooterBox = () => {
  return (
    <Footer>
      Made with{" "}
      <FooterSpan role="img" aria-label="love">
      ❤️
      </FooterSpan>
      by{" "}
      <Linked to="https://www.linkedin.com/in/alexandra-lhermitte-802a54171/">
        Alex
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
        Seb
      </Linked>
    </Footer>
  );
};

export default FooterBox;
