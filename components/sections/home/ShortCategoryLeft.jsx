import Product from "@/components/cards/Product";

const skincareProducts = [
    {
        id: 1,
        name: "Choice Skincare",
        img: "/assets/images/beauty/img-47.jpg",
        price: 300,
        link: "card-product-detail-1.html",
    },
    {
        id: 2,
        name: "Athena Care",
        img: "/assets/images/beauty/img-52.jpg",
        price: 280,
        link: "card-product-detail-1.html",
    },
    {
        id: 3,
        name: "Herb",
        img: "/assets/images/beauty/img-10.jpg",
        price: 280,
        link: "card-product-detail-1.html",
    },
    {
        id: 4,
        name: "Luxury Lips",
        img: "/assets/images/beauty/img-53.jpg",
        price: 285,
        link: "card-product-detail-1.html",
    },
    {
        id: 5,
        name: "Olay",
        img: "/assets/images/beauty/img-60.jpg",
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

export default function ShortCategoryLeft() {
    return (
        <section className="py-8">
            <div className="px-4 xl:px-0 xl:max-w-[1370px] xl:px-0 mx-auto text-center">
                <h2 className="text-26 md:text-40 font-bodoni-moda font-bold text-center">Skincare</h2>
                <p className="font-normal text-zinc-500 mt-4 max-w-[860px] mx-auto">
                    Fusce venenatis varius consectetur. Ut tempor lectus id mauris feugiat tempus. Integer condimentum congue nunc quis mollis. Vivamus suscipit dolor sed quam malesuada, nec aliquet sem faucibus.
                </p>
                <a
                    href="aenean-purus.html"
                    className="inline-block mt-4 px-8 py-1.5 text-base font-bold border-2 rounded-full border-zinc-950 hover:text-white hover:bg-[#3a8551] hover:border-[#3a8551] transition-all duration-500 scale-100 group-hover/item:scale-105"
                >
                    Shop all Skincare
                </a>
            </div>
            <div className="px-4 xl:px-0 xl:max-w-[1370px] xl:px-0 mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 my-10">
                    {/* Left image */}
                    <div className="w-full lg:w-2/5 flex-shrink-0 flex flex-col">
                        <a href="#" className="group h-full w-full flex-1 overflow-hidden flex">
                            <img src="/assets/images/beauty/img-9.jpg" className="h-full w-full object-cover transition-all duration-500 scale-100 group-hover/item:scale-105 hover:scale-105 group-hover:scale-105" alt="" />
                        </a>
                    </div>
                    {/* Product cards */}
                    <div className="w-full lg:w-3/5 flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-6 h-full">
                            {skincareProducts.map(product => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}