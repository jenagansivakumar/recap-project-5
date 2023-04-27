import ArtPieceList from "../../components/ArtPieceList/ArtPieceList";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPiecesPage({}) {
  const { data } = useSWR(URL, fetcher);
  console.log("fetch art pieces page:", { data });
  return <ArtPieceList pieces={data} />;
}
