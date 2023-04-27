import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

test("all art pieces are displayed with a favorite button", () => {
  render(<ArtPiecePreview />);
  const button = screen.getByRole("button", { name: "💘" });
  expect(button).toBeInTheDocument();
});
