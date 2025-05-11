import ProductSuggestion from "@/components/cards/ProductSuggestion";

export default function RecommendedProducts() {
    const products = [
        {
            name: "image sources. If you have any other places or files in mind, let me know!",
            img: "/assets/images/fashion-2/img-18.jpg",
            link: "card-product-detail-1.html",
            price: 288,
            oldPrice: null,
            size: "280ml"
        },
        {
            name: "SportK",
            img: "/assets/images/fashion-2/img-12.jpg",
            link: "card-product-detail-1.html",
            price: 285,
            oldPrice: 280,
            size: "280ml"
        },
        {
            name: "NIKE",
            img: "/assets/images/fashion-2/img-14.jpg",
            link: "card-product-detail-1.html",
            price: 300,
            oldPrice: null,
            size: "280ml"
        },
        {
            name: "MenGlassess",
            img: "/assets/images/fashion-2/img-62.jpg",
            link: "card-product-detail-1.html",
            price: 300,
            oldPrice: null,
            size: "280ml"
        },
        {
            name: "SportK",
            img: "/assets/images/fashion-2/img-11.jpg",
            link: "card-product-detail-1.html",
            price: 275,
            oldPrice: 280,
            size: "280ml"
        },
        {
            name: "Nike",
            img: "/assets/images/fashion-2/img-16.jpg",
            link: "card-product-detail-1.html",
            price: 300,
            oldPrice: 310,
            size: "280ml"
        },
        {
            name: "UniTED Hoddie",
            img: "/assets/images/products/p-2.jpg",
            link: "card-product-detail-1.html",
            price: 79,
            oldPrice: 149,
            size: "280ml"
        },
        {
            name: "Converse",
            img: "/assets/images/fashion-2/img-64.jpg",
            link: "card-product-detail-1.html",
            price: 245,
            oldPrice: null,
            size: "280ml"
        },
        {
            name: "RoutinX",
            img: "/assets/images/fashion-2/img-74.jpg",
            link: "card-product-detail-1.html",
            price: 300,
            oldPrice: null,
            size: "280ml"
        },
        {
            name: "Fantasy Jeans",
            img: "/assets/images/fashion-2/img-83.jpg",
            link: "card-product-detail-1.html",
            price: 289,
            oldPrice: null,
            size: "280ml"
        },
        {
            name: "9 Tails",
            img: "/assets/images/fashion-2/img-77.jpg",
            link: "card-product-detail-1.html",
            price: 97,
            oldPrice: null,
            size: "280ml"
        },
        {
            name: "Men Jeans",
            img: "/assets/images/fashion-2/img-20.jpg",
            link: "card-product-detail-1.html",
            price: 211,
            oldPrice: 280,
            size: "280ml"
        },
    ];

    return (
        <div className="mb-14">
            <h2 className="text-lg font-medium">RECOMMENDED PRODUCTS</h2>

            {/* List of products */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-7">
                {products.map((product, index) => (
                    <ProductSuggestion key={index} product={product} />
                ))}
            </div>
        </div>
    );
}
