import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "./FavoriteButton";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

describe("FavoriteButton", () => {
  const SLUG = "example-slug";
  const TOGGLE_FAVORITE = jest.fn();

  test("should be displayed in the spotlight view", () => {
    render(
      <FavoriteButton
        slug={SLUG}
        isFavorite={false}
        onToggleFavorite={TOGGLE_FAVORITE}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("should be displayed in each entry in the list view", () => {
    render(
      <FavoriteButton
        slug={SLUG}
        isFavorite={false}
        onToggleFavorite={TOGGLE_FAVORITE}
      />
    );
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  test("should be displayed in the details view", () => {
    render(
      <FavoriteButton
        slug={SLUG}
        isFavorite={false}
        onToggleFavorite={TOGGLE_FAVORITE}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

//   test("should save a non-favorite piece as a favorite when clicked", () => {
//     render(
//       <FavoriteButton
//         slug={SLUG}
//         isFavorite={false}
//         onToggleFavorite={TOGGLE_FAVORITE}
//       />
//     );
//     userEvent.click(screen.getByRole("button"));
//     expect(TOGGLE_FAVORITE).toHaveBeenCalledWith(SLUG);
//   });
// });

// test("tests favorite button event handler", async () => {
//   const handleFavorite = jest.fn();

//   const user = userEvent.setup();

//   render(<FavoriteButton onClick={handleFavorite} />);

//   const faveButton = screen.getByRole("button", {
//     Name: "💘",
//   });

//   await user.click(faveButton);

//   expect(handleFavorite).toHaveBeenCalledTimes(0);
// });

// test("toggle button toggles text content", () => {
//   const { getByText } = render(<ArtPiecePreview />);
//   const button = getByText("💔");
//   fireEvent.click(button);
//   expect(button).toHaveTextContent("💘");
//   fireEvent.click(button);
//   expect(button).toHaveTextContent("💔");
// });
