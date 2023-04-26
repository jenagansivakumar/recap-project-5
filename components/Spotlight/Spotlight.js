import React from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <Image src={image} width={800} height={800} alt="alt text" />
      <p>{artist}</p>
    </div>
  );
}
