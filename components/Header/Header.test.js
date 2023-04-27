import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("displays a navigation link labeled 'Spotlight'", () => {
  render(<Header />);
  const spotlightLink = screen.getByText("Spotlight");
  expect(spotlightLink).toBeInTheDocument();
});

test("displays a navigation link labeled 'Home'", () => {
  render(<Header />);
  const piecesLink = screen.getByText("Home");
  expect(piecesLink).toBeInTheDocument();
});
