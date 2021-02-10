import React from "react";

import styled from "styled-components";

import "./Footer.scss";

const FooterStyle = styled.div`
  height: ${(styleProps) => styleProps.h}px;
  & > .container > div > p {
    height: ${(styleProps) => styleProps.h}px;
    line-height: ${(styleProps) => styleProps.h}px;
  }
`;

function Footer(props) {
  return (
    <FooterStyle id="footer" h={props.h}>
      <div className="container">
        <div className="grid00"></div>
        <div className="grid01">
          <img
            src={`${process.env.PUBLIC_URL}/footer/logo.png`}
            alt="footer-logo"
          />
        </div>
        <div className="grid02">
          <p>@2020- haru1843</p>
        </div>
        <div className="grid03"></div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
