import React from "react";
import styled from "styled-components";

export default function FavoriteButton({ isFavorite, toggleFavorite }) {
  return (
    <StyledButton onClick={() => toggleFavorite()}>
      {isFavorite ? "💔" : "💘"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
   {
    border-radius: 50%;
    border: 5px solid #ffc5c8;
    background-color: #ffc5c8;
    font-weight: bold;
    font-size: 20px;
  }
`;
