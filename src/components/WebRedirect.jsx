import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routerPaths } from "../utils/routerPaths";

const WebRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(routerPaths.home);
  }, [navigate]);
  return <></>;
};

export default WebRedirect;
