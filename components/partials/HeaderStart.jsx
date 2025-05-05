"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HeaderStart() {
    return (
        <section className="bg-red-200">
            <div className="px-4 lg:px-9 xl:px-0 xl:max-w-[1370px] mx-auto text-center relative w-full">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.header-swiper-next',
                        prevEl: '.header-swiper-prev',
                    }}
                    loop={true}
                    className="mt-1"
                >
                    <SwiperSlide>
                        <p className="text-xs font-semibold py-2.5">
                            SHOP NOW, PAY LATER WITH HALOPAY®. LEARN NOW
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className="text-xs font-semibold py-2.5">
                            FREE SHIPPING ON ORDERS OVER $50. SHOP TODAY!
                        </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className="text-xs font-semibold py-2.5">
                            NEW ARRIVALS ARE HERE. CHECK OUT THE LATEST TRENDS!
                        </p>
                    </SwiperSlide>
                </Swiper>
                <div className="absolute top-1/2 right-4 flex flex-row gap-2 z-10 -translate-y-1/2">
                    <button className="header-swiper-prev border rounded-full p-1 transition" aria-label="Previous">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="header-swiper-next border rounded-full p-1 transition" aria-label="Next">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
