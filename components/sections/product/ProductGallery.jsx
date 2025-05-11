"use client"

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { EyeIcon } from "@heroicons/react/24/outline";

const images = [
    "/assets/images/beauty/img-69.jpg",
    "/assets/images/beauty/img-70.jpg",
    "/assets/images/beauty/img-71.jpg",
];

export default function ProductGallery() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>product gallery</div>
    );
}
