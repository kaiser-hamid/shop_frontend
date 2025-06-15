import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Product({ hit }) {

    console.log('product Hits', hit);

    return (
        <div className="border-2 border-gray-200 rounded-xl flex flex-col justify-between h-full relative">
            {/* Main card */}
            <Link className="flex flex-row md:block" href={`/products/${hit.slug}`}>
                {/* Image section */}
                <ProductImage source={hit.featured_image} alt="Product Image" />

                {/* Details section */}
                <ProductDetails hit={hit} />

                {/* Discount Fixed position */}
                <div className="absolute bg-primary-500 top-0 text-white px-2 rounded-tl-lg rounded-br-lg font-medium uppercase">
                    {hit.discount_percentage && `${hit.discount_percentage}% Off`}
                </div>
            </Link>

            {/* Action button */}
            <ActionButton />
        </div>
    )
}

const ProductImage = ({ source, alt }) => {
    return (
        <div className="overflow-hidden rounded-xl w-[40%] md:w-full p-2 md:p-0">
            <div className="relative w-full h-[280px]">
                <Image src={source} alt={alt} height={400} width={400} className="object-cover object-center hover:scale-110 transition-all ease-in-out duration-1000" />
            </div>
        </div>
    )
}

const ProductDetails = ({ hit }) => {
    return (
        <div className="px-[15px] pt-[16px] md:px-[1.75em] md:py-[1.5625em] w-[60%] md:w-full">
            <p
                className="text-gray-700 text-sm md:min-h-full text-left md:text-center mb-2 h-[2.4em] leading-[120%] overflow-hidden hover:text-primary-500"
                title={hit.name}
            >
                {hit.name}
            </p>
            <div className="pb-2 text-left md:text-center">
                <span className="inline-block bg-primary-500 rounded-full px-3 text-white text-sm">{hit.stock_quantity > 0 ? "SALE" : "OUT OF STOCK"}</span>
            </div>
            <div className="flex justify-start md:justify-center space-x-3 mb-1">
                {hit.price !== hit.sale_price && (
                    <span className="line-through text-gray-400">৳ {hit.price}</span>
                )}
                <span className="text-primary-500 font-semibold">৳ {hit.sale_price}</span>
            </div>
            <p className="text-primary-500 font-semibold text-left md:text-center mb-0 min-h-[24px]"></p>
            <div className="text-left md:text-center mb-1">
                <div className="star-ratings inline-block align-middle" title={`${hit.rating} Stars`}>
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            viewBox="0 0 51 48"
                            className="widget-svg inline-block"
                            style={{ width: 12, height: 12 }}
                        >
                            <path
                                d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                style={{
                                    fill: i < Number(hit.rating) ? "orange" : "rgb(203, 211, 227)",
                                    transition: "fill 0.2s ease-in-out",
                                }}
                            />
                        </svg>
                    ))}
                </div>
            </div>
            {hit.size && (
                <p className="text-left md:text-center mb-1 font-semibold">{hit.size}</p>
            )}
        </div>
    )
}

const ActionButton = () => {
    return (
        <button
            type="button"
            className="p-3 bg-primary-500 text-white w-full text-center rounded-b-xl uppercase hover:bg-rr-black hover:transition hover:ease-in hover:duration-300 font-semibold"
        >
            ADD TO CART
        </button>
    )
}
