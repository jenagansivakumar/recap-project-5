import useSWR from "swr";
import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.id}
          image={piece.image}
          title={piece.title}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}

function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image src={image} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>{artist}</p>
      {/* additional information here */}
    </div>
  );
}

function Home() {
  const { data: pieces } = useSWR("https://example-apis.vercel.app/api/art");

  return (
    <div>
      {pieces ? <ArtPieces pieces={pieces} /> : <p>Loading art pieces...</p>}
    </div>
  );
}
