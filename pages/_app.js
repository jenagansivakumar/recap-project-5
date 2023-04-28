import GlobalStyle from "../styles";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    console.log(slug);
    setArtPiecesInfo((current) => {
      return current.map((artPiece) => {
        if (artPiece.slug === slug) {
          return { ...artPiece, isFavorite: !artPiece.isFavorite };
        }
        return artPiece;
      });
    });
  }

  useEffect(() => {
    if (data) {
      setArtPiecesInfo(
        data.map((artPiece) => {
          return { ...artPiece, isFavorite: false };
        })
      );
    }
  }, [data]);

  console.log("artpieces info in APP: ", artPiecesInfo);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component
        {...pageProps}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
