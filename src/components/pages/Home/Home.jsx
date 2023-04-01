import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.scss";
import HomePageContent from "./HomePageContent";
import { strings } from "../../../utils/strings";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{strings.home.helmetTitle}</title>
      </Helmet>
      <HomePageContent />
    </>
  );
};

export default Home;
