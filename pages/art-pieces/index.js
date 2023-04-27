import ArtPieceList from "../../components/ArtPieceList/ArtPieceList";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPiecesPage({}) {
  const { data } = useSWR(URL, fetcher);
  console.log("fetch art pieces page:", { data });
  return <ArtPieceList pieces={data} />;
}

{
  /* <div>
<h1>Art Detail</h1>
<ArtPieceDetail
  title={piece.name}
  year={piece.year}
  genre={piece.genre}
  image={piece.imageSource}
  artist={piece.artist}
/>
;
</div>; */
}
