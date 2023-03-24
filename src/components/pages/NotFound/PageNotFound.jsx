import React from "react";
import { Helmet } from "react-helmet-async";
import "./PageNotFound.scss";
import { useNavigate } from "react-router-dom";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import Button from "@mui/material/Button";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>404 Page not found</title>
      </Helmet>
      <div className="pageNotFoundContent">
        <SearchOffIcon className='notFoundIcon'/>
        <h1>404 - Not Found</h1>
        <h1>Se pare că pagina nu a fost găsită.</h1>
          <Button
              variant="contained"
              color="secondary"
              className="menu-button"
              onClick={() => {
                  navigate("/home");
              }}>
              Pagina principală
          </Button>
      </div>
    </>
  );
};

export default PageNotFound;
