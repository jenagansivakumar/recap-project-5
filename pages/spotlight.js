import useSWR from "swr";
import Spotlight from "../components/Spotlight/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function SpotlightPage() {
  const { data } = useSWR(URL);
  console.log("data", data);

  function randomArtPiece(pieces) {
    const randomNumber = Math.floor(Math.random() * pieces.length);
    return pieces[randomNumber];
  }

  const piece = randomArtPiece(data);

  return (
    <div>
      {/* <h1>Art Pick of the Day</h1> */}
      <Spotlight image={piece.imageSource} artist={piece.artist} />;
    </div>
  );
}
