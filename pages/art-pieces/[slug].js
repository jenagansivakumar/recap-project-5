import ArtPieceDetail from "../../components/ArtPieceDetail/ArtPieceDetail";
import { useRouter } from "next/router";
import useSWR from "swr";
// Create the page pages/art-pieces/[slug] that renders ArtPieceDetails
//  Read the query parameter slug from next/router
//  Use the slug to find the art piece to display

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function DetailPage({ pieces }) {
  const { data } = useSWR(URL, fetcher);
  console.log("fetch art pieces page:", { data });

  const route = useRouter();
  const { slug } = route.query;
  const piece = data.find((element) => element.slug === slug);

  console.log("data in slug;", piece);

  return (
    <ArtPieceDetail
      name={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      image={piece.imageSource}
    />
  );
}
