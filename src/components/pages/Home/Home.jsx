import React from "react";
import { Helmet } from "react-helmet-async";
import strings from "../../../config/strings";
import "./Home.scss";
import HomePageContent from "./HomePageContent";

const { homepage: homepageStrings } = strings;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Acasă</title>
      </Helmet>
      <HomePageContent />
    </>
  );
};

export default Home;
