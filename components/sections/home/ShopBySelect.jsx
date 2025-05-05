"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Product from '@/components/cards/Product'

const tabData = [
    {
        label: 'BEST SELLERS',
        products: [
            {
                name: 'Aphrodite Made',
                img: '/assets/images/beauty/img-73.jpg',
                price: 300,
                oldPrice: 320,
                link: 'card-product-detail-1.html',
            },
            {
                name: 'Venus Glow',
                img: '/assets/images/beauty/img-74.jpg',
                price: 350,
                oldPrice: 370,
                link: 'card-product-detail-2.html',
            },

        ],
    },
    {
        label: 'NEW IN',
        products: [
            {
                name: 'Athena Care',
                img: '/assets/images/beauty/img-69.jpg',
                price: 280,
                oldPrice: 300,
                link: 'card-product-detail-1.html',
            },
            {
                name: 'Poseidon Splash',
                img: '/assets/images/beauty/img-70.jpg',
                price: 295,
                oldPrice: 315,
                link: 'card-product-detail-5.html',
            },
            {
                name: 'Demeter Dew',
                img: '/assets/images/beauty/img-71.jpg',
                price: 265,
                oldPrice: 285,
                link: 'card-product-detail-6.html',
            },
            {
                name: 'Apollo Shine',
                img: '/assets/images/beauty/img-72.jpg',
                price: 305,
                oldPrice: 325,
                link: 'card-product-detail-7.html',
            },
        ],
    },
    {
        label: 'MOST POPULAR',
        products: [
            {
                name: 'Luxury Lips',
                img: '/assets/images/beauty/img-53.jpg',
                price: 285,
                link: 'card-product-detail-1.html',
            },
            {
                name: 'Glamour Eyes',
                img: '/assets/images/beauty/img-54.jpg',
                price: 320,
                link: 'card-product-detail-8.html',
            },
            {
                name: 'Radiant Skin',
                img: '/assets/images/beauty/img-55.jpg',
                price: 340,
                link: 'card-product-detail-9.html',
            },
            {
                name: 'Chic Cheeks',
                img: '/assets/images/beauty/img-56.jpg',
                price: 295,
                link: 'card-product-detail-10.html',
            },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ShopBySelect() {
    return (
        <section className="container my-8 lg:my-16">
            <div className="mx-auto">
                <h2 className="text-2xl md:text-4xl font-bodoni-moda font-semibold text-center mb-6">
                    Shop by Select
                </h2>
                <TabGroup>
                    <TabList className="flex justify-center mb-10 space-x-4">
                        {tabData.map((tab) => (
                            <Tab
                                key={tab.label}
                                className={({ selected }) =>
                                    classNames(
                                        'px-4 py-2 text-15 font-semibold uppercase border-b-2 transition outline-none',
                                        selected
                                            ? 'border-black text-black'
                                            : 'border-transparent text-zinc-500 hover:text-black'
                                    )
                                }
                            >
                                {tab.label}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                        {tabData.map((tab, tabIdx) => (
                            <TabPanel key={tab.label}>
                                <div className="flex justify-end gap-2 mb-4">
                                    <button
                                        className="shopby-prev bg-zinc-200 text-zinc-500 w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition"
                                        aria-label="Previous"
                                        type="button"
                                    >
                                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </button>
                                    <button
                                        className="shopby-next bg-zinc-200 text-zinc-500 w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-black hover:text-white transition"
                                        aria-label="Next"
                                        type="button"
                                    >
                                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </button>
                                </div>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        nextEl: '.shopby-next',
                                        prevEl: '.shopby-prev',
                                    }}
                                    pagination={false}
                                    spaceBetween={24}
                                    slidesPerView={1}
                                    breakpoints={{
                                        640: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                    className="categoriesCard pb-16 xl:pb-0"
                                >
                                    {tab.products.map((product, i) => (
                                        <SwiperSlide key={i}>
                                            <Product product={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </section>
    )
}