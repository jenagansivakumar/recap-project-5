import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPieceList() {
  const { data } = useSWR(URL, fetcher);
  console.log({ data });

  return (
    <>
      <ul>
        {data?.map((art) => {
          return (
            <li key={art.slug}>
              {art.name}
              {art.artist}
              <Image src={art.imageSource} width={100} height={100} />
            </li>
          );
        })}
        <li>Art Pieces</li>
      </ul>
    </>
  );
}
