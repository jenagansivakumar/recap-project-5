import ArtPieceList from "../components/ArtPieceList/ArtPieceList";
import ArtPiecePreview from "../components/ArtPiecePreview/ArtPiecePreview";

export default function FavoritesPage({ artPiecesInfo, onToggleFavorite }) {
  const filteredArt = artPiecesInfo.filter(
    (artPiece) => artPiece.isFavorite == true
  );
  console.log("filteredArt: ", filteredArt);

  return (
    <>
      {filteredArt.map((artPiece, index) => {
        return (
          <ul>
            <li key={index}>
              <ArtPiecePreview
                image={artPiece.imageSource}
                title={artPiece.name}
                artist={artPiece.artist}
                altTag={artPiece.name}
                isFavorite={artPiece.isFavorite}
                slug={artPiece.slug}
                onToggleFavorite={onToggleFavorite}
              />
            </li>
          </ul>
        );
      })}
    </>
  );
}
