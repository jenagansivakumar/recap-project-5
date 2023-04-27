import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const piece = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
];

test("image of art piece is displayed", () => {
  render(<Spotlight image={piece.imageSource} artist={piece.artist} />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("image of art piece is displayed", () => {
  const artistName = "Steve Johnson";
  render(<Spotlight image={piece.imageSource} artist={artistName} />);
  const artist = screen.getByText(artistName);
  expect(artist).toBeInTheDocument();
});
