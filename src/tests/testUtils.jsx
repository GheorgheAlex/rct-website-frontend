import React from "react";
import * as testingLibrary from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "../App";
import { theme } from "../theme";

const AllProviders = ({ initialRoute }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <App />
      </MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = ({ initialRoute }) => {
  return testingLibrary.render(<AllProviders initialRoute={initialRoute} />);
};

module.exports = {
  ...testingLibrary,
  userEvent,
  render: customRender,
};
