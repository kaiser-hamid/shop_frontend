"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BannerSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        waitForAnimate: false,
        customPaging: (i) => (
            <div className="home-slider-bullet" />
        )
    };

    return (
        <section className="overflow-x-hidden pb-10">
            <Slider {...settings}>
                <div>
                    <img src="assets/images/banner/home-slider/home-slider-1.webp" className="w-full" alt="" />
                </div>
                <div>
                    <img src="assets/images/banner/home-slider/home-slider-2.webp" className="w-full" alt="" />
                </div>
                <div>
                    <img src="assets/images/banner/home-slider/home-slider-3.webp" className="w-full" alt="" />
                </div>
                <div>
                    <img src="assets/images/banner/home-slider/home-slider-4.webp" className="w-full" alt="" />
                </div>
                <div>
                    <img src="assets/images/banner/home-slider/home-slider-5.webp" className="w-full" alt="" />
                </div>
            </Slider>
        </section>
    )
}   
