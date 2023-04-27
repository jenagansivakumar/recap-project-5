import React from "react";
import styled from "styled-components";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <StyledButton onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? "💔" : "💘"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
   {
    border-radius: 50%;
    border: 5px solid lightgrey;
    background-color: lightgrey;
    font-weight: bold;
    font-size: 20px;
  }
`;
