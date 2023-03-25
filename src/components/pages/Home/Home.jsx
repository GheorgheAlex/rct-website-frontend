import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.scss";
import HomePageContent from "./HomePageContent";

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
