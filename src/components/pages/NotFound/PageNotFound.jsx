import React from "react";
import { Helmet } from "react-helmet-async";
import "./PageNotFound.scss";
import { useNavigate } from "react-router-dom";
import strings from "../../../config/strings";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>404 Page not found</title>
      </Helmet>
      <div className="pageNotFoundContent">
        <h1>404 - Not Found</h1>
        <h1>Se pare ca pagina nu a fost gasita.</h1>
        <h2
          onClick={() => {
            navigate("/home");
          }}
        >
          Mergi pe pagina "Acasa"
        </h2>
      </div>
    </>
  );
};

export default PageNotFound;
