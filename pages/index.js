import useSWR from "swr";
import ArtPieceList from "../components/ArtPieceList/ArtPieceList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data } = useSWR(URL, fetcher);
  console.log({ data });

  return (
    <>
      <ArtPieceList pieces={data} />
    </>
  );
}
