import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceList({ pieces }) {
  return (
    <ul>
      {data?.map((piece) => {
        return (
          <li key={piece.slug}>
            {piece.name}
            {piece.artist}
            <Image
              src={piece.imageSource}
              width={100}
              height={100}
              alt={piece.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
