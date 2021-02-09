import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { photos } from "../components/Photos";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
      <GalleryImageContainer>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </GalleryImageContainer>
    </Layout>
  );
}

const GalleryImageContainer = styled.div`
  padding: 0;
  max-width: 1000px;
  padding-top: 100px;
  margin: 0 auto;
`;
