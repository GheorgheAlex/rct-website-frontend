import { fireEvent, render, screen } from "../../../../tests/testUtils";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("PageNotFound Tests", () => {
  test("should render", () => {
    render({ route: "/wrongPath" });

    expect(screen.getByText("404 - Page not found")).toBeInTheDocument();
    expect(
      screen.getByText("Se pare că pagina nu a fost găsită.")
    ).toBeInTheDocument();
    expect(screen.getByTestId("navigateHomeBtn")).toBeInTheDocument();
  });

  test("pressing home button should redirect home", () => {
    render({ route: "/wrongPath" });

    const mainPageBtn = screen.getByTestId("navigateHomeBtn");

    fireEvent.click(mainPageBtn);
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/home");
  });
});
