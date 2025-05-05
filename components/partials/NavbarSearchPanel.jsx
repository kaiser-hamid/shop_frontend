export default function NavbarSearchPanel() {
    return (
        <div className="fixed inset-0 z-[99] lg:flex lg:flex-col xl:items-center bg-[#0000004d] justify-start overflow-y-auto hidden">
            <div className="bg-white xl:mt-32 relative w-[90%] md:w-[400px] xl:w-full ml-0">
                <div className="xl:w-[1570px] mx-auto">
                    {/* Mobile Search Header */}
                    <div className="xl:hidden fixed top-0 w-[90%] md:w-[400px] z-50 bg-white">
                        <p className="bg-[#f9f9f9] py-2 px-5 text-base font-body font-bold uppercase">My search</p>
                        <form action="" className="px-5 py-6">
                            <div className="flex justify-between border-gray-200">
                                <div className="border-b flex-grow">
                                    <input
                                        type="text"
                                        className="text-black bg-white w-full focus:text-black pb-1.5 text-white/60 placeholder:text-[#808080] focus:border-transparent placeholder:font-body focus:outline-0"
                                        placeholder="Search for anything"
                                    />
                                </div>
                                <span className="search-icon">Search Icon</span>
                            </div>
                        </form>
                    </div>

                    {/* Main Content */}
                    <div className="p-5 xl:p-8 mt-[110px] xl:mt-0">
                        {/* Header with Close Button */}
                        <div className="flex justify-between items-center gap-4 mb-6">
                            <h3 className="text-lg font-bold relative">
                                <span className="relative z-10 pr-5 font-bodoni-moda bg-white text-black">Trending</span>
                            </h3>
                            <div className="cursor-pointer fixed top-0 left-[90%] md:left-[400px] bg-black p-3 w-10 h-10 z-[99] xl:hidden">
                                <span className="close-icon">Close Icon</span>
                            </div>
                            <div className="cursor-pointer hidden xl:block">
                                <span className="close-icon">Close Icon</span>
                            </div>
                        </div>

                        {/* Trending Search Terms */}
                        <ul className="flex flex-wrap gap-4">
                            {[
                                'best shopify theme',
                                'beauty shopify theme',
                                'shopify sections',
                                'Beauty',
                                'drag + drop',
                                'section shopify theme',
                                'Skincare shopify themes',
                                'Makeup',
                                'skincare',
                                'beauty',
                                'cosmetics'
                            ].map((term, index) => (
                                <li key={index}>
                                    <a
                                        href="header-shopify.html"
                                        className="flex inline-flex border-[2px] rounded-md border-[#cccccc] py-1.5 px-3"
                                    >
                                        <span className="search-icon">Search Icon</span>
                                        <span className="text-base text-[#505050]">{term}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Popular Products Section */}
                        <div className="mt-8">
                            <h3 className="text-lg font-bold relative">
                                <span className="relative z-10 pr-5 font-bodoni-moda bg-white text-black">Popular Products</span>
                            </h3>

                            {/* Products Slider */}
                            <div className="swiper h-search-2 mt-5">
                                <div className="swiper-wrapper">
                                    {/* Product Slide 1 */}
                                    <div className="swiper-slide">
                                        <div className="inline-block group">
                                            <a href="#!" className="relative overflow-hidden">
                                                <div className="relative group/item overflow-hidden transition-all duration-500 scale-100 group-hover/item:scale-105">
                                                    <img
                                                        src="assets/images/beauty/img-73.jpg"
                                                        alt=""
                                                        className="img-fluid transition-all duration-500 scale-100 group-hover/item:scale-105"
                                                    />
                                                    {/* Color Options */}
                                                    <div className="lg:absolute inset-x-0 -bottom-11 group-hover:bottom-0 transition-all duration-500 scale-100 group-hover/item:scale-105 z-30">
                                                        <div className="product-color-list py-2 gap-2 flex items-center justify-center bg-white">
                                                            <div className="size-8 border-2 rounded-full bg-cover bg-[url('/assets/images/beauty/img-73.jpg')]"></div>
                                                            <div className="size-8 border-2 rounded-full bg-cover bg-[url('/assets/images/beauty/img-74.jpg')]"></div>
                                                        </div>
                                                    </div>
                                                    {/* Sale Badge */}
                                                    <div className="hidden md:inline-block md:absolute inset-0 z-20 m-3">
                                                        <div className="mt-[1px]">
                                                            <span className="px-2 py-0.5 text-xs font-bold uppercase text-white bg-green-700">Sale</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            {/* Product Details */}
                                            <div className="mt-2 text-center">
                                                <a href="#" className="text-base font-bold uppercase">Aphrodite Made</a>
                                                <a href="#" className="inline-block fs-15 mt-2 text-zinc-500 hover:underline transition-all duration-500 scale-100 group-hover/item:scale-105 !line-clamp-2">
                                                    (Product 10) Sample - Makeup, Skincare and Perfumes For Sale
                                                </a>
                                                <div className="flex items-center justify-center py-2">
                                                    <div>
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} className="star-icon">Star Icon</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-2">
                                                    <span className="text-lg font-normal text-zinc-900"><s>$320.00</s></span>
                                                    <span className="font-black text-zinc-900">$300.00</span>
                                                </div>
                                                <a href="#" className="py-2 px-8 mt-5 inline-block rounded-full text-center text-15 font-bold border-2 border-zinc-950 text-zinc-950 bg-transparent hover:text-white hover:bg-zinc-950 transition-all duration-500 scale-100 group-hover/item:scale-105">
                                                    Add To Bag
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Slide 2 */}
                                    <div className="swiper-slide">
                                        <div className="inline-block group">
                                            <a href="#!" className="relative overflow-hidden">
                                                <div className="relative group/item overflow-hidden transition-all duration-500 scale-100 group-hover/item:scale-105">
                                                    <div className="md:hidden">
                                                        <img src="assets/images/beauty/img-52.jpg" alt="" />
                                                    </div>
                                                    <div className="hidden md:inline-block">
                                                        <img src="assets/images/beauty/img-52.jpg" alt="" className="img-fluid transition-all duration-500 scale-100 group-hover/item:scale-105" />
                                                    </div>
                                                    {/* Color Options */}
                                                    <div className="lg:absolute inset-x-0 -bottom-11 group-hover:bottom-0 transition-all duration-500 scale-100 group-hover/item:scale-105 z-30">
                                                        <div className="product-color-list py-2 gap-2 flex items-center justify-center bg-white">
                                                            <div className="size-8 border-2 rounded-full bg-cover bg-[url('/assets/images/beauty/img-52.jpg')]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            {/* Product Details */}
                                            <div className="mt-2 text-center">
                                                <a href="#" className="text-base font-bold uppercase">Athena Care</a>
                                                <a href="#" className="inline-block fs-15 mt-2 text-zinc-500 hover:underline transition-all duration-500 scale-100 group-hover/item:scale-105 !line-clamp-2">
                                                    (Product 9) Sample - Makeup, Skincare and Perfumes For Sale
                                                </a>
                                                <div className="flex items-center justify-center py-2">
                                                    <div>
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} className="star-icon">Star Icon</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center gap-2">
                                                    <span className="text-lg font-normal text-zinc-900">From</span>
                                                    <span className="font-black text-zinc-900">$280.00</span>
                                                </div>
                                                <a href="#" className="py-2 px-8 mt-5 inline-block rounded-full text-center text-15 font-bold border-2 border-zinc-950 text-zinc-950 bg-transparent hover:text-white hover:bg-zinc-950 transition-all duration-500 scale-100 group-hover/item:scale-105">
                                                    Add To Bag
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional product slides would follow the same pattern */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
