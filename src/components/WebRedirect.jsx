import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../utils/paths";

const WebRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(paths.home);
  }, [navigate]);
  return <></>;
};

export default WebRedirect;
