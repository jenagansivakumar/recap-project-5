import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceList({ pieces }) {
  return (
    <ul>
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
    </ul>
  );
}
