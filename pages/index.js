import ArtPieceList from "../components/ArtPieceList/ArtPieceList";

export default function HomePage({ onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <ArtPieceList
        pieces={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
