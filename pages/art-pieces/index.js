import ArtPieceDetail from "../../components/ArtPieceDetail/ArtPieceDetail";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPiecesPage({ artPiecesInfo, onToggleFavorite }) {
  const { data } = useSWR(URL, fetcher);
  console.log("fetch art pieces page:", { data });
  return (
    <ArtPieceDetail
      pieces={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
