import useSWR from "swr";
import Image from "next/image";
import ArtPieceList from "../components/ArtPieceList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data } = useSWR(URL, fetcher);
  console.log({ data });

  return (
    <>
      <h1>List of All Art Pieces</h1>
      <ArtPieceList />
    </>
  );
}
