import React from "react";
import "./Footer.scss";
import { strings } from "../../utils/strings";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1>{strings.footer.motto}</h1>
        <hr />
        <h3>{strings.footer.emailAddress}</h3>
        <h3>{strings.footer.copyright}</h3>
      </div>
    </>
  );
};

export default Footer;
