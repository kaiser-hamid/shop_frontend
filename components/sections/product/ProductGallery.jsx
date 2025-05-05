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
        <div className="lg:sticky lg:top-0 h-fit mb-4">
            <div>
                <div className="gallery-container gap-3 block">
                    <div className="relative w-full">
                        <Swiper
                            modules={[Navigation, Thumbs]}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="gallery-main"
                        >
                            {images.map((src, idx) => (
                                <SwiperSlide key={src}>
                                    <div className="relative">
                                        <div className="hidden sm:block absolute inset-0 z-0 m-3">
                                            <div>
                                                <span className="px-2 py-0.5 text-xs font-bold uppercase text-red-500 bg-white">Sale</span>
                                            </div>
                                            <div className="mt-[1px]">
                                                <span className="px-2 py-0.5 text-xs font-bold uppercase bg-white">Bundle</span>
                                            </div>
                                        </div>
                                        <img src={src} className="h-full w-full object-cover" alt={`Slide 0${idx + 1}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            modules={[Thumbs]}
                            onSwiper={setThumbsSwiper}
                            slidesPerView={3}
                            spaceBetween={8}
                            className="gallery-thumbs h-[100px] mt-2"
                        >
                            {images.map((src, idx) => (
                                <SwiperSlide key={src} className="cursor-pointer w-28 h-28">
                                    <img src={src} alt={`Slide 0${idx + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
