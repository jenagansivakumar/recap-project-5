import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPieceList() {
  const { data } = useSWR(URL, fetcher);
  console.log({ data });

  return (
    <>
      <ul>
        {data.map((art) => {
          return <li key={art.slug}></li>;
        })}
        <li>Art Pieces</li>
      </ul>
    </>
  );
}
