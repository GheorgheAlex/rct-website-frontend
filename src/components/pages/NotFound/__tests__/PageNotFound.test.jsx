import React from "react";
import PageNotFound from "../PageNotFound";
import { render, screen } from "../../../../tests/testUtils";

describe("PageNotFound Tests", () => {
  test("should render", () => {
    render(<PageNotFound />, { initialRoutes: ["/wrongPath"] });

    expect(screen.getByText("404 - Page not found.")).toBeInTheDocument();
  });
});
