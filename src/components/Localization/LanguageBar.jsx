import React from "react";
import "./LanguageBar.scss";
import ROFlag from "../../assets/flag-ro.png";
import UKFlag from "../../assets/flag-uk.png";

const LanguageBar = () => {
  const handleROFlagClick = () => {
    console.log("Change language to romanian");
  };

  const handleUKFlagClick = () => {
    console.log("Change language to english");
  };

  return (
    <div className="languageHeader">
      <button className="btn" onClick={handleROFlagClick}>
        <img src={ROFlag} className="language-flag" alt="Romanian flag" />
        RO
      </button>
      <button className="btn" onClick={handleUKFlagClick}>
        <img src={UKFlag} className="language-flag" alt="UK flag" />
        EN
      </button>
    </div>
  );
};

export default LanguageBar;
