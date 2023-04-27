// Create the component ArtPieceDetails
//  ArtPieceDetails props: image, title, artist, year, genre
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPieceDetail({ image, title, artist, year, genre }) {
  return (
    <ArtDetails>
      <h2>{title}</h2>
      <p className="artPieceDetail__artist">{artist}</p>
      <StyledDetailImage
        className="artPieceDetail__img"
        src={image}
        width={320}
        height={320}
        alt="alt text"
      />
      <p>{genre}</p>
      <p>{year}</p>
      <StyledDetailButton href="/" className="artPieceDetail_button">
        Back
      </StyledDetailButton>
    </ArtDetails>
  );
}

const ArtDetails = styled.div`
   {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-top: 50px;
    }

    .artPieceDetail__artist {
      font-size: 20px;
      font-style: italic;
    }
  }
`;

const StyledDetailImage = styled.img`
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
`;

const StyledDetailButton = styled.a`
  font-size: 20px;
  text-decoration: none;
  border: 5px solid #fd7779;
  border-radius: 5px;
  background: #fd7779;
  padding: 10px;
`;
