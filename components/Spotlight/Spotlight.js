import React from "react";
import styled from "styled-components";

export default function Spotlight({ image, artist }) {
  return (
    <StyledSpotlightWrapper>
      <h1>Art Pick of the Day</h1>
      <StyledSpotlightImage
        src={image}
        width={400}
        height={400}
        alt="alt text"
        className="spotlight__image"
      />
      <StyledSpotlightArtist className="artPiecePreview__artist">
        {artist}
      </StyledSpotlightArtist>
    </StyledSpotlightWrapper>
  );
}

const StyledSpotlightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSpotlightImage = styled.img`
  border-radius: 10px;
  box-shadow: 5px 5px 5px grey;
`;

const StyledSpotlightArtist = styled.p`
  font-size: 25px;
  margin-top: 16px;
`;
