"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
    {
        name: "body",
        img: "/assets/images/beauty/img-16.jpg",
        link: "collection-list-03.html",
    },
    {
        name: "Fragnance",
        img: "/assets/images/beauty/img-17.jpg",
        link: "collection-list-03.html",
    },
    {
        name: "Balms",
        img: "/assets/images/beauty/img-18.jpg",
        link: "collection-list-03.html",
    },
    {
        name: "Beauty",
        img: "/assets/images/beauty/img-19.jpg",
        link: "collection-list-03.html",
    },
    {
        name: "Makeup",
        img: "/assets/images/beauty/img-20.jpg",
        link: "collection-list-03.html",
    },
    {
        name: "Balms",
        img: "/assets/images/beauty/img-18.jpg",
        link: "collection-list-03.html",
    },
    {
        name: "Beauty",
        img: "/assets/images/beauty/img-19.jpg",
        link: "collection-list-03.html",
    },
    {
        name: "Makeup",
        img: "/assets/images/beauty/img-20.jpg",
        link: "collection-list-03.html",
    },
];

export default function ShopByCategory() {
    return (
        <section className="my-12">
            <div className="px-4 xl:px-0 xl:max-w-[1370px] xl:px-0 mx-auto text-center">
                <h2 className="text-26 md:text-40 font-bodoni-moda font-bold text-center">Shop by Category</h2>
                <p className="font-normal text-zinc-500 mt-6">Fusce venenatis varius consectetur. Ut tempor lectus id mauris feugiat tempus.</p>
                <a href="collection-list-04.html" className="inline-block mt-4 px-8 py-1.5 text-base font-bold border-2 rounded-full border-zinc-950 hover:text-white hover:bg-[#3a8551] hover:border-[#3a8551] transition-all duration-500 scale-100 group-hover/item:scale-105">Shop all Categories</a>
            </div>
            <div className="px-4 xl:px-0 xl:max-w-[1370px] xl:px-0 mx-auto mt-10">
                <div className="flex justify-end gap-2 mb-4">
                    <button
                        className="shopbycat-prev bg-zinc-200 text-zinc-500 w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition"
                        aria-label="Previous"
                        type="button"
                    >
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button
                        className="shopbycat-next bg-zinc-200 text-zinc-500 w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition"
                        aria-label="Next"
                        type="button"
                    >
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.shopbycat-next',
                        prevEl: '.shopbycat-prev',
                    }}
                    spaceBetween={24}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                    className="categoriesCard"
                >
                    {categories.map((cat, i) => (
                        <SwiperSlide key={i}>
                            <div className="min-w-[180px] flex-shrink-0">
                                <div className="inline-block overflow-hidden w-full">
                                    <img src={cat.img} className="h-full w-full transition-all duration-500 scale-100 group-hover/item:scale-105 hover:scale-105" alt={cat.name} />
                                </div>
                                <h4 className="text-15 font-semibold uppercase text-center mt-2">
                                    <a href={cat.link} tabIndex={0}>{cat.name}</a>
                                </h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
