import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist, altTag }) {
  console.table({ image, title, artist, altTag });
  return (
    <article>
      <p>{title}</p>
      <p> {artist} </p>
      <Image src={image} width={100} height={100} alt={altTag} />
    </article>
  );
}
