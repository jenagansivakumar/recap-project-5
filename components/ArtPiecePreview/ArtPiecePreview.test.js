// All art pieces are displayed as a list 🖼️
// Each art piece's image is displayed 🖼️
// Each art piece's title is displayed 🖼️
// Each art piece's artist is displayed 🖼️

import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

test("all art pieces are displayed with a favorite button", () => {
  render(<ArtPiecePreview />);
  const button = screen.getByRole("button", { name: "💔" });
  expect(button).toBeInTheDocument();
});
