import React from "react";
import { Helmet } from "react-helmet-async";
import "./PageNotFound.scss";
import { useNavigate } from "react-router-dom";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import Button from "@mui/material/Button";
import { routerPaths } from "../../../utils/routerPaths";
import { strings } from "../../../utils/strings";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>{strings.pageNotFound.helmetTitle}</title>
      </Helmet>
      <div className="pageNotFoundContent">
        <SearchOffIcon className='notFoundIcon'/>
        <h1>{strings.pageNotFound.pageContent.title}</h1>
        <h1>{strings.pageNotFound.pageContent.errorMessage}</h1>
          <Button
              variant="contained"
              color="secondary"
              className="menu-button"
              data-testid="navigateHomeBtn"
              onClick={() => {
                  navigate(routerPaths.home);
              }}>
            {strings.pageNotFound.pageContent.mainPageBtn}
          </Button>
      </div>
    </>
  );
};

export default PageNotFound;
