"use client";

import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductGallery({ productImages }) {
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
                alt={item.original || ''}
                width={1200} // set your desired width
                height={1200} // set your desired height
                className="object-contain max-h-[80vh] w-auto h-auto"
                priority
            />
        </div>
    );

    const imageData = productImages.map(image => ({
        original: image,
        thumbnail: image,
    }));

    console.log('imageData', imageData);

    return (
        <ImageGallery
            ref={galleryRef}
            items={imageData}
            autoPlay={false}
            showPlayButton={false}
            slideOnThumbnailOver={true}
            showNav={false}
            renderItem={renderItem}
        />
    );
}
