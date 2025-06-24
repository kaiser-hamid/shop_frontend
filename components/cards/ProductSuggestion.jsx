import Image from "next/image";
import Link from "next/link";

export default function ProductSuggestion({ product }) {
    return (
        <div className="border-2 border-gray-200 rounded-xl flex flex-col justify-between h-full">
            <div className="flex flex-row md:block">
                <div className="w-full h-[280px] overflow-hidden rounded-xl w-[40%] md:w-full p-2 md:p-0">
                    <div className="relative w-full h-[280px]">
                        <Image
                            alt={product.name}
                            src={product.featured_image}
                            height={400}
                            width={400}
                            className="object-cover object-center hover:scale-110 transition-all ease-in-out duration-1000"
                        />
                    </div>
                </div>
                <div className="px-[15px] pt-[16px] md:px-[1.75em] md:py-1 w-[60%] md:w-full">
                    <Link href={`/product/${product.slug}`}>
                        <p
                            className="text-gray-700 text-sm md:min-h-full text-left md:text-center mb-2 h-[2.4em] leading-[120%] overflow-hidden hover:text-primary-500 cursor-pointer"
                            title={product.name}
                        >
                            {product.name}
                        </p>
                    </Link>
                    <div className="flex justify-start md:justify-center space-x-3 mb-1">
                        {product.price !== product.sale_price && (
                            <span className="line-through text-gray-400">৳ {product.price}</span>
                        )}
                        <span className="text-primary-500 font-semibold">৳ {product.sale_price}</span>
                    </div>
                    <p className="text-primary-500 font-semibold text-left md:text-center mb-0 min-h-[24px]"></p>
                </div>
            </div>
            <button className="bg-primary-500 px-3 py-1 text-center rounded-lg text-white mx-5 my-3" type="button">
                ADD TO CART
            </button>
        </div>
    );
}
