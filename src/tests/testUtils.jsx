import React from "react";
import * as testingLibrary from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";
import App from "../App";
import { theme } from "../theme";

const AllProviders = ({ children, initialRoutes }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={initialRoutes}>
        <HelmetProvider>
          <App />
          {children}
        </HelmetProvider>
      </MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = (ui, { initialRoutes }) => {
  return testingLibrary.render(ui, {
    wrapper: function Wrapper() {
      return <AllProviders initialRoutes={initialRoutes} />;
    },
  });
};

module.exports = {
  ...testingLibrary,
  userEvent,
  render: customRender,
};
