"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BannerSlider() {
    return (
        <section className="bg-zinc-50">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        // Custom bullet: you can change the markup and classes here
                        return `<span class="home-slider-bullet ${className}"></span>`;
                    }
                }}
                loop={true}
                className="group"
            >
                <SwiperSlide>
                    <img src="assets/images/beauty/img-1.jpg" className="w-full hidden md:block" alt="" />
                    <img src="assets/images/beauty/s-11.jpg" className="w-full md:hidden" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/beauty/img-2.jpg" className="w-full hidden md:block" alt="" />
                    <img src="assets/images/beauty/s-22.jpg" className="w-full md:hidden" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/beauty/img-3.jpg" className="w-full hidden md:block" alt="" />
                    <img src="assets/images/beauty/s-33.jpg" className="w-full md:hidden" alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}   
