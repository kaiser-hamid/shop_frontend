import Product from "@/components/cards/Product";

const makeupProducts = [
    {
        id: 1,
        name: "Athena Care",
        img: "/assets/images/beauty/img-52.jpg",
        price: 280,
        link: "card-product-detail-1.html",
    },
    {
        id: 2,
        name: "Choice Skincare",
        img: "/assets/images/beauty/img-47.jpg",
        price: 300,
        link: "card-product-detail-1.html",
    },
    {
        id: 3,
        name: "Luxury Lips",
        img: "/assets/images/beauty/img-53.jpg",
        price: 285,
        link: "card-product-detail-1.html",
    },
    {
        id: 4,
        name: "Olay",
        img: "/assets/images/beauty/img-60.jpg",
        price: 300,
        link: "card-product-detail-1.html",
    },
    {
        id: 5,
        name: "THE ORDINARY",
        img: "/assets/images/beauty/img-54.jpg",
        price: 300,
        link: "card-product-detail-1.html",
    },
    {
        id: 6,
        name: "New Lips",
        img: "/assets/images/beauty/img-62.jpg",
        price: 285,
        link: "card-product-detail-1.html",
    },
];

export default function ShortCategoryRight() {
    return (
        <section className="container py-8">
            <div className="mx-auto text-center">
                <h2 className="text-26 md:text-40 font-bodoni-moda font-semibold text-center">Makeup</h2>
                <p className="font-normal text-zinc-500 mt-6 xl:max-w-[840px] mx-auto">
                    Fusce venenatis varius consectetur. Ut tempor lectus id mauris feugiat tempus. Integer condimentum congue nunc quis mollis. Vivamus suscipit dolor sed quam malesuada, nec aliquet sem faucibus.
                </p>
                <a
                    href="aenean-purus.html"
                    className="inline-block mt-4 px-8 py-1.5 text-base font-bold border-2 rounded-full border-zinc-950 hover:text-white hover:bg-[#3a8551] hover:border-[#3a8551] transition-all duration-500 scale-100 group-hover/item:scale-105"
                >
                    Shop all Skincare
                </a>
            </div>
            <div className="mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 my-12">
                    {/* Left image for mobile only */}
                    <div className="w-full lg:w-2/5 flex-shrink-0 flex flex-col lg:hidden">
                        <a href="#" className="group h-full w-full flex-1 overflow-hidden flex">
                            <img src="/assets/images/beauty/img-15.jpg" className="h-full w-full object-cover transition-all duration-500 scale-100 group-hover/item:scale-105 hover:scale-105 group-hover:scale-105" alt="" />
                        </a>
                    </div>
                    {/* Product cards */}
                    <div className="w-full lg:w-3/5 flex flex-col">
                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 h-full">
                            {makeupProducts.map(product => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                    {/* Right image for desktop only */}
                    <div className="w-full lg:w-2/5 flex-shrink-0 flex flex-col hidden lg:block">
                        <a href="#" className="group h-full w-full flex-1 overflow-hidden flex">
                            <img src="/assets/images/beauty/img-15.jpg" className="h-full w-full object-cover transition-all duration-500 scale-100 group-hover/item:scale-105 hover:scale-105 group-hover:scale-105" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
