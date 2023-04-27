import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/spotlight"}>Spotlight</Link>
        <Link href={"/favorites"}>Favorites</Link>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
   {
    width: 100%;
    padding: 20px;
    background: #fd7779;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 2rem;

      a {
        text-decoration: none;
        color: black;
        font-size: 25px;
        font-weight: 600;
      }
    }
  }
`;
