"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Product from '../cards/Product';

const products = [
    {
        name: 'Sample Bag 1',
        img: '/assets/images/bag/img-1.jpg',
        link: '#',
        price: 29,
        oldPrice: 39,
    },
    {
        name: 'Sample Bag 2',
        img: '/assets/images/bag/img-2.jpg',
        link: '#',
        price: 35,
        oldPrice: 45,
    },
    {
        name: 'Sample Bag 3',
        img: '/assets/images/bag/img-3.jpg',
        link: '#',
        price: 22,
        oldPrice: 30,
    },
    {
        name: 'Sample Bag 4',
        img: '/assets/images/bag/img-4.jpg',
        link: '#',
        price: 40,
        oldPrice: 50,
    },
    {
        name: 'Sample Bag 5',
        img: '/assets/images/bag/img-5.jpg',
        link: '#',
        price: 18,
        oldPrice: 25,
    },
    {
        name: 'Sample Gym 1',
        img: '/assets/images/gym/img-1.jpg',
        link: '#',
        price: 32,
        oldPrice: 40,
    },
    {
        name: 'Sample Gym 2',
        img: '/assets/images/gym/img-2.jpg',
        link: '#',
        price: 27,
        oldPrice: 35,
    },
    {
        name: 'Sample Gym 3',
        img: '/assets/images/gym/img-3.jpg',
        link: '#',
        price: 38,
        oldPrice: 48,
    },
];

export default function RelatedProducts() {
    return (
        <section class="my-14">
            <div class="px-4 lg:px-9 xl:px-0 xl:max-w-[1370px] mx-auto">
                <h3 class="py-8 flex-grow  lg:text-2xl uppercase font-bold  relative before:hidden sm:before:block before:absolute before:top-[50%] before:left-0 before:w-full before:h-0.5 before:bg-zinc-200 text-center ">
                    <span class="relative z-0 pe-1 xs:px-5 bg-zinc-50  ">RELATED PRODUCTS</span>
                </h3>
                <div className="px-4 xl:px-0 xl:max-w-[1370px] mx-auto mt-4">
                    <div className="flex justify-end gap-2 mb-4">
                        <button
                            className="relatedproducts-prev bg-zinc-200 text-zinc-500 w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition"
                            aria-label="Previous"
                            type="button"
                        >
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        <button
                            className="relatedproducts-next bg-zinc-200 text-zinc-500 w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition"
                            aria-label="Next"
                            type="button"
                        >
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.relatedproducts-next',
                            prevEl: '.relatedproducts-prev',
                        }}
                        spaceBetween={24}
                        slidesPerView={2}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                        }}
                        className="relatedProductsSlider"
                    >
                        {products.map((product, i) => (
                            <SwiperSlide key={i}>
                                <Product product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
