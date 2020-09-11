import React from "react";
import Footer from "../style/Footer";
import ExtLink from "../style/ExtLink";
import FooterSpan from "../style/FooterSpan";
import ScrollButton from "../components/ScrollButton";

const FooterBox = () => {
  return (
    <Footer>
      Made with{" "}
      <FooterSpan role="img" aria-label="love">
        <span role="img" aria-label="love">
          ❤️
        </span>
      </FooterSpan>
      by{" "}
      <ExtLink
        href="https://www.linkedin.com/in/alexandra-lhermitte-802a54171/"
        title="Alexandra Linkedin"
      >
        Alexandra
      </ExtLink>
      ,{" "}
      <ExtLink
        href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/"
        title="Alyson Linkedin"
      >
        Alyson
      </ExtLink>
      ,{" "}
      <ExtLink
        href="https://www.linkedin.com/in/guillaume-bento-aires-7623071a3/"
        title="guillaume Linkedin"
      >
        Guillaume
      </ExtLink>
      ,{" "}
      <ExtLink
        href="https://www.linkedin.com/in/pablo-vilella-0bb66b195/"
        title="Pablo Linkedin"
      >
        Pablo
      </ExtLink>{" "}
      et{" "}
      <ExtLink
        href="https://www.linkedin.com/in/s%C3%A9bastien-morin-70a0371ab/"
        title="Sebastien Linkedin"
      >
        Sebastien
      </ExtLink>
      <ScrollButton scrollStepInPx="50" delayInMs="10" />
    </Footer>
  );
};

export default FooterBox;
