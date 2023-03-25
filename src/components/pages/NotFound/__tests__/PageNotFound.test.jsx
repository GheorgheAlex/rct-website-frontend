import React from "react";
import PageNotFound from "../PageNotFound";
import { render, screen } from "../../../../tests/testUtils";
import { fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

describe("PageNotFound Tests", () => {

  test("should render", () => {
    render(<PageNotFound />, { initialRoutes: ["/wrongPath"] });

    expect(screen.getByText("404 - Page not found")).toBeInTheDocument();
    expect(screen.getByText("Se pare că pagina nu a fost găsită.")).toBeInTheDocument();
    expect(screen.getByTestId("navigateHomeBtn")).toBeInTheDocument();
  });

  test('Pressing home button should redirect home', () =>{
    render(<PageNotFound />, { initialRoutes: ["/wrongPath"] });

    const mainPageBtn = screen.getByTestId("navigateHomeBtn");

    fireEvent.click(mainPageBtn);
    expect(useNavigate.toHaveBeenCalledWith(""));
  });
});
