import React from "react";
import * as testingLibrary from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "../App";
import { theme } from "../theme";

const AllProviders = ({ route }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = ({ route }) => {
  return testingLibrary.render(<AllProviders route={route} />);
};

module.exports = {
  ...testingLibrary,
  userEvent,
  render: customRender,
};
