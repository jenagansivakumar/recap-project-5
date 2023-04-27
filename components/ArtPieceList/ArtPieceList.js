import React from "react";
import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieceList({ pieces }) {
  return (
    <StyledUl>
      {pieces?.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              altTag={piece.name}
            />
          </li>
        );
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
   {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 50px;
    flex-direction: row;
    gap: 50px;

    li {
      display: flex;
    }

    .artPiecePreview__image {
      border-radius: 10px;
      box-shadow: 5px 5px 5px grey;
    }

    .artPiecePreview__image:hover {
      transform: scale(1.1);
    }

    .artPiecePreview__title {
      font-weight: bold;
    }

    .artPiecePreview__artist {
      font-style: italic;
    }
  }
`;
