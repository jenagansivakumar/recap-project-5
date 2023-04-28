// Clicking an art piece from the list shows the detail page
// The art piece image is displayed 🖼️
// The art piece title is displayed 🖼️
// The art piece artist is displayed 🖼️
// The art piece year is displayed 🖼️
// The art piece genre is displayed 🖼️
// A back-button is displayed 🖼️
// Clicking the back-button shows the list view

import { render, screen } from "@testing-library/react";
import ArtPieceDetail from "./ArtPieceDetail";

test("displays the art piece's title", () => {
  render(<ArtPieceDetail title="title" />);
  const title = screen.getByText("title");
  expect(title).toBeInTheDocument();
});

test("displays the art piece's artist", () => {
  render(<ArtPieceDetail artist="artist" />);
  const artist = screen.getByText("artist");
  expect(artist).toBeInTheDocument();
});

test("displays the art piece's image with correct alt text", () => {
  render(
    <ArtPieceDetail image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
  );
  const image = screen.getByAltText("alt text");
  expect(image).toBeInTheDocument();
});

test("displays the art piece's genre", () => {
  render(<ArtPieceDetail genre="genre" />);
  const genre = screen.getByText("genre");
  expect(genre).toBeInTheDocument();
});

test("displays the art piece's year", () => {
  render(<ArtPieceDetail year="year" />);
  const year = screen.getByText("year");
  expect(year).toBeInTheDocument();
});

test("displays a 'Back' button", () => {
  render(<ArtPieceDetail />);
  const button = screen.getByText("Back to all Artpieces");
  expect(button).toBeInTheDocument();
});

test("displays a favorite button", () => {
  render(<ArtPieceDetail />);
  const button = screen.getByRole("button", { name: "💔" });
  expect(button).toBeInTheDocument();
});
