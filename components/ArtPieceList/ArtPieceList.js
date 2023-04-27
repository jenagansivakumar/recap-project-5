import React from "react";
import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";

export default function ArtPieceList({ pieces }) {
  return (
    <>
      <StyledHeadline>All Art Pieces</StyledHeadline>
      <StyledUl>
        {pieces?.map((piece) => {
          return (
            <li key={piece.slug}>
              <a>
                <ArtPiecePreview
                  image={piece.imageSource}
                  title={piece.name}
                  artist={piece.artist}
                  altTag={piece.name}
                  isFavorite={false}
                  slug={piece.slug}
                />
                <br></br>
                <br></br>
                <Link href={`art-pieces/${piece.slug}`}>
                  <StyledLink>Show more</StyledLink>
                </Link>
              </a>
            </li>
          );
        })}
      </StyledUl>
    </>
  );
}

const StyledHeadline = styled.h1`
   {
    display: flex;
    margin-left: 40px;
    margin-top: 30px;
  }
`;

const StyledUl = styled.ul`
   {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 50px;
    flex-direction: row;
    gap: 50px;

    li {
      display: flex;
    }

    li a {
      text-decoration: none;
      color: black;
    }

    .artPiecePreview__image {
      border-radius: 10px;
      box-shadow: 5px 5px 5px grey;
    }

    .artPiecePreview__image:hover {
      transform: scale(1.1);
    }

    .artPiecePreview__title {
      font-weight: bold;
    }

    .artPiecePreview__artist {
      font-style: italic;
    }
  }
`;

const StyledLink = styled.a`
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    // font-weight: bold;
    border: 5px solid #ffc5c8;
    background-color: #ffc5c8;
    border-radius: 5px;
    width: 100px;
    box-shadow: 5px 5px 5px grey;
  }
`;
