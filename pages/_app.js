import GlobalStyle from "../styles";
import ArtPieceList from "../components/ArtPieceList";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
