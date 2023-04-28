import ArtPieceDetail from "../../components/ArtPieceDetail/ArtPieceDetail";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function DetailPage({
  artPiecesInfo,
  onToggleFavorite,
  isFavorite,
}) {
  const { data } = useSWR(URL, fetcher);
  console.log("fetch art pieces page:", { data });

  const route = useRouter();
  const { slug } = route.query;
  const piece = artPiecesInfo.find((element) => element.slug === slug);

  console.log("data in slug;", piece);

  return (
    <ArtPieceDetail
      title={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      image={piece.imageSource}
      isFavorite={piece.isFavorite}
      slug={piece.slug}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
