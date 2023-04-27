import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  altTag,
  onToggleFavorite,
  isFavorite,
  slug,
}) {
  console.table({ image, title, artist, altTag });
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
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        slug={slug}
      />
    </>
  );
}
