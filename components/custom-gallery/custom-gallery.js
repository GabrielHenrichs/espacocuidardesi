import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images"

import './custom-gallery-style.scss'

const photos = Array(24).fill(1).map((num, index) => (
    {
        src: require(`../../src/img/gallery/${index + 1}.jpeg`),
        thumbnail: require(`../../src/img/gallery/thumbs/${index + 1}.jpg`),
        direction: 'column',
        columns: 10,
        width: 3,
        height: 2,
    }
));

const CustomGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="custom-gallery">
            <Gallery
                photos={photos}
                margin={10}
                renderImage={({ photo, index }) => (
                    <div className="col-12 col-md-6 col-lg-3">
                        <img className="w-100 mb-4 img-thumbnail cursor" src={photo.thumbnail} onClick={() => openLightbox(index)} />
                    </div>
                )}
            />

            <ModalGateway>
                {viewerIsOpen && (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(photo => ({
                                ...photo, srcset: photo.src
                            }))}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
      );
};

export default CustomGallery;