import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useState } from "react";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  altTag,
  isFavorite,
  slug,
}) {
  console.table({ image, title, artist, altTag, isFavorite, slug });
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  function toggle() {
    setIsFavoriteState(!isFavoriteState);
  }
  return (
    <>
      <article>
        <Image
          src={image}
          width={250}
          height={250}
          alt={altTag}
          className="artPiecePreview__image"
        />
        <p className="artPiecePreview__title">{title}</p>
        <p className="artPiecePreview__artist"> {artist} </p>
      </article>
      <FavoriteButton
        toggleFavorite={toggle}
        isFavorite={isFavoriteState}
        slug={slug}
      />
    </>
  );
}
