import React from "react";
import Footer from "./Footer";
import ExtLink from "./ExtLink";
import FooterSpan from "./FooterSpan";

const FooterBox = () => {
  return (
    <Footer>
      Made with{" "}
      <FooterSpan role="img" aria-label="love">
      ❤️
      </FooterSpan>
      by{" "}
      <ExtLink href="https://www.linkedin.com/in/alexandra-lhermitte-802a54171/" target="_blank">
        Alex
      </ExtLink>
      ,{" "}
      <ExtLink href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/" target="_blank">
        Alyson
      </ExtLink>
      ,{" "}
      <ExtLink href="https://www.linkedin.com/in/guillaume-bento-aires-7623071a3/" target="_blank">
        Guillaume
      </ExtLink>
      ,{" "}
      <ExtLink href="https://www.linkedin.com/in/pablo-vilella-0bb66b195/" target="_blank">
        Pablo
      </ExtLink>{" "}
      et{" "}
      <ExtLink href="https://www.linkedin.com/in/s%C3%A9bastien-morin-70a0371ab/" target="_blank">
        Seb
      </ExtLink>
    </Footer>
  );
};

export default FooterBox;
