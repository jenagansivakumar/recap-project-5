import useSWR from "swr";
import Spotlight from "../components/Spotlight/Spotlight";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function SpotlightPage({
  onToggleFavorite,
  isFavorite,
  slug,
  image,
  artist,
}) {
  const { data } = useSWR(URL);
  console.log("data", data);

  function randomArtPiece(pieces) {
    const randomNumber = Math.floor(Math.random() * pieces.length);
    return pieces[randomNumber];
  }

  const piece = randomArtPiece(data);

  return (
    <div>
      <Spotlight
        onToggleFavorite={onToggleFavorite}
        isFavorite={piece.isFavorite}
        slug={piece.slug}
        image={piece.imageSource}
        artist={piece.artist}
      />
    </div>
  );
}
