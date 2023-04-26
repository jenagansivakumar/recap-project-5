import React from "react";
import styled from "styled-components";

export default function Spotlight({ image, artist }) {
  return (
    <StyledSpotlightWrapper>
      <StyledSpotlightImage
        src={image}
        width={600}
        height={600}
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
  font-weight: bold;
  margin-top: 16px;
`;
