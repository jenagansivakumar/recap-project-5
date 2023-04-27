// Create the component ArtPieceDetails
//  ArtPieceDetails props: image, title, artist, year, genre
import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetail({ image, title, artist, year, genre }) {
  return (
    <div className="artPieceDetail__wrapper">
      <Link href="/art-pieces" className="artPieceDetail_button">
        Back
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
      <Image
        className="artPieceDetail__img"
        src={image}
        width={400}
        height={400}
        alt="alt text"
      />
      <p>{genre}</p>
      <p>{year}</p>
    </div>
  );
}
