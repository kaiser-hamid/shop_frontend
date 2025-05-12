import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "/assets/images/beauty/img-69.jpg",
        thumbnail: "/assets/images/beauty/img-69.jpg",
    },
    {
        original: "/assets/images/beauty/img-70.jpg",
        thumbnail: "/assets/images/beauty/img-70.jpg",
    },
    {
        original: "/assets/images/beauty/img-71.jpg",
        thumbnail: "/assets/images/beauty/img-71.jpg",
    },
    {
        original: "/assets/images/beauty/img-69.jpg",
        thumbnail: "/assets/images/beauty/img-69.jpg",
    },
    {
        original: "/assets/images/beauty/img-70.jpg",
        thumbnail: "/assets/images/beauty/img-70.jpg",
    },
    {
        original: "/assets/images/beauty/img-71.jpg",
        thumbnail: "/assets/images/beauty/img-71.jpg",
    },
    {
        original: "/assets/images/beauty/img-69.jpg",
        thumbnail: "/assets/images/beauty/img-69.jpg",
    },
    {
        original: "/assets/images/beauty/img-70.jpg",
        thumbnail: "/assets/images/beauty/img-70.jpg",
    },
    {
        original: "/assets/images/beauty/img-71.jpg",
        thumbnail: "/assets/images/beauty/img-71.jpg",
    },
];

export default function ProductGallery() {
    const galleryRef = useRef();

    // Custom renderItem to use next/image and center in fullscreen
    const renderItem = (item) => (
        <div
            className="image-gallery-image"
            style={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
            onClick={() => galleryRef.current.fullScreen()}
        >
            <Image
                src={item.original}
                alt={item.originalAlt || ''}
                width={1200} // set your desired width
                height={1200} // set your desired height
                className="object-contain max-h-[80vh] w-auto h-auto"
                priority
            />
        </div>
    );

    return (
        <ImageGallery
            ref={galleryRef}
            items={images}
            autoPlay={false}
            showPlayButton={false}
            slideOnThumbnailOver={true}
            showNav={false}
            renderItem={renderItem}
        />
    );
}
