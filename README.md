- Recreating an art gallery app.
- An API (https://example-apis.vercel.app/api/art) provides all art pieces to show in the gallery.
- Use the next/image component to display the image of art pieces.
- Establish a state to store additional information that is linked to the art pieces given by the API.
- Create a new repository on GitHub and add everybody in your group as a collaborator.
- User stories:

  - User Story 1: List of all Art Pieces

    - Fetch all art pieces with SWR in pages/index.js.
    - Create the component ArtPieces to render a list.
    - ArtPieces props: pieces.
    - Create the component ArtPiecePreview.
    - ArtPiecePreview props: image, title, artist.
    - All acceptance criteria marked with 🖼️ are covered by component testing.

  - User Story 2: Spotlight Piece

    - Write a function to pick one art piece at random.
    - Create the component Spotlight.
    - Spotlight props: image, artist.
    - All acceptance criteria marked with 🖼️ are covered by component testing.

  - User Story 3: Separate Pages and Navigation Bar

    - Move the data fetching logic to pages/\_app.
    - Find a solution for global state handling to have the art pieces available on all pages.
    - Adapt the page pages/index: rename the function to SpotlightPage and have it render only the Spotlight component.
    - Create the page pages/art-pieces/index that renders the ArtPieces component.
    - Create the component Navigation that renders all navigation links.
    - Create the component Layout that renders the Navigation component.
    - Apply the Layout component in pages/\_app.
    - All acceptance criteria marked with 🖼️ are covered by component testing.

  - User Story 4: Art Piece Details Page

    - Create the component ArtPieceDetails.
    - ArtPieceDetails props: image, title, artist, year, genre.
    - Create the page pages/art-pieces/[slug] that renders ArtPieceDetails.
    - Read the query parameter slug from next/router.
    - Use the slug to find the art piece to display.
    - All acceptance criteria marked with 🖼️ are covered by component testing.

  - User Story 5: Favorites
    - The favorite-button is displayed in the spotlight view 🖼️.
    - The favorite-button is displayed in each entry in the list view 🖼️.
    - The favorite-button is displayed in the details view 🖼️.

- Plan the work wisely and talk about the next steps in the team.
- The goal of the recap project is to write clean code with isolated components that are tested well.
- Create a new Next.js project based on the template.
- All resources should be downloaded and extracted into the project folder.
