import Layout from "../components/Layout";
import styled from "styled-components";
export default function Gallery() {
  return (
    <Layout>
      <GalleryHeader>Gallery</GalleryHeader>
      <GalleryImageContainer>
        <GalleryItem className="gallery-item-1">
          <GalleryImage src="/gallery/boat.jpg" alt="placeholder" />
        </GalleryItem>
        <GalleryItem className="gallery-item-2">
          <GalleryImage src="/gallery/boxing.jpg" alt="placeholder" />
        </GalleryItem>
        <GalleryItem className="gallery-item-3">
          <GalleryImage src="/gallery/coast.jpg" alt="placeholder" />
        </GalleryItem>
        <GalleryItem className="gallery-item-4">
          <GalleryImage src="/gallery/frank.jpg" alt="placeholder" />
        </GalleryItem>
        <GalleryItem className="gallery-item-5">
          <GalleryImage src="/gallery/guy.jpg" alt="placeholder" />
        </GalleryItem>
        <GalleryItem className="gallery-item-6">
          <GalleryImage src="/gallery/jack.jpg" alt="placeholder" />
        </GalleryItem>
        <GalleryItem className="gallery-item-7">
          <GalleryImage src="/gallery/hossgolf.jpg" alt="placeholder" />
        </GalleryItem>
        <GalleryItem className="gallery-item-8">
          <GalleryImage src="/gallery/engaged.jpg" alt="placeholder" />
        </GalleryItem>
      </GalleryImageContainer>
    </Layout>
  );
}

const GalleryHeader = styled.h1`
  margin-top: 4rem;

  font-family: "Inter";
  font-weight: 900;
  font-size: 3rem;
  color: white;
  text-align: center;
`;

const GalleryImageContainer = styled.div`
  padding: 0;
  max-width: 1000px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(20, 5vw);
  grid-gap: 15px;

  .gallery-item-1 {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 5;
  }

  .gallery-item-2 {
    grid-column-start: 6;
    grid-column-end: 10;
    grid-row-start: 1;
    grid-row-end: 7;
  }
  .gallery-item-3 {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 5;
    grid-row-end: 10;
  }

  .gallery-item-4 {
    grid-column-start: 6;
    grid-column-end: 10;
    grid-row-start: 7;
    grid-row-end: 11;
  }
  .gallery-item-5 {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 10;
    grid-row-end: 17;
  }

  .gallery-item-6 {
    grid-column-start: 6;
    grid-column-end: 10;
    grid-row-start: 11;
    grid-row-end: 14;
  }

  .gallery-item-7 {
    grid-column-start: 6;
    grid-column-end: 10;
    grid-row-start: 14;
    grid-row-end: 17;
  }
  .gallery-item-8 {
    grid-column-start: 1;
    grid-column-end: 10;
    grid-row-start: 17;
    grid-row-end: 22;
  }
`;
const GalleryItem = styled.figure``;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
