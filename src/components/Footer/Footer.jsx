import React from "react";
import strings from "../../config/strings";
import "./Footer.scss";

const { general: generalStrings } = strings;

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1>Vocea studenților</h1>
        <hr />
        <h3>0712 345 678</h3>
        <h3>unitbvradiocampus@gmail.com</h3>
        <h3>© 2022 Radio Campus Transilvania (RCT). Created By Alex Gheorghe & Georgiana Timo.</h3>
      </div>
    </>
  );
};

export default Footer;
